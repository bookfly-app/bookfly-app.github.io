NPM := "$(shell command -v bun 2>/dev/null || command -v pnpm 2>/dev/null || command -v npm 2>/dev/null || command -v yarn 2>/dev/null)"
TAURI := "$(shell command -v cargo-tauri 2>/dev/null)"
TAURI ?= $(NPM) tauri

.PHONY: all build-site deploy dev-site dev-native-app build-linux-app clean build-exe build-all bump-patch-version bump-minor-version

# Runs the website in develop mode
dev-site:
	$(NPM) run dev

# Runs the app in develop mode
dev-native-app:
	$(TAURI) dev

# Builds the website for production
build-site:
	$(NPM) run build
	touch build/web/.nojekyll
	touch build/web/CNAME
	echo "wallflower.land" >> build/web/CNAME

# Build a Windows EXE
build-exe:
	cargo tauri build --runner cargo-xwin --target x86_64-pc-windows-msvc

# Builds the app for production as a native executable for the current system
build-linux-app:
	NO_STRIP=true $(TAURI) build --verbose

# Clean everything
clean:
	rm node_modules -rf
	rm build -rf
	rm src-tauri/target -rf
	$(NPM) install

# Increment patch version
bump-patch-version:
	sed -i -E 's/"version": *"([0-9]+)\.([0-9]+)\.([0-9]+)"/"version": "\1.\2.\3 + 1"/e' src/tauri.conf.json
	sed -i -E 's/"version": *"([0-9]+)\.([0-9]+)\.([0-9]+)"/"version": "\1.\2.\3 + 1"/e' package.json
	sed -i -E 's/^version = "([0-9]+)\.([0-9]+)\.([0-9]+)"/version = "\1.\2.$((\3+1))"/e' Cargo.toml

# Increment minor version
bump-minor-version:
	sed -i -E 's/"version": *"([0-9]+)\.([0-9]+)\.[0-9]+"/"version": "\1.$((\2+1)).0"/e' src/tauri.conf.json
	sed -i -E 's/"version": *"([0-9]+)\.([0-9]+)\.[0-9]+"/"version": "\1.$((\2+1)).0"/e' package.conf.json
	sed -i -E 's/^version = "([0-9]+)\.([0-9]+)\.[0-9]+"/version = "\1.$((\2+1)).0"/e' Cargo.toml

# Build all possible targets
build-all: build-site build-linux-app
	[ -d src-tauri/target/release/bundle/deb ] && cp -r src-tauri/target/release/bundle/deb build/debian

# Builds the website for production and deploys it publicly
deploy-site: build-site
	git add .
	git commit -m "New build deployment"
	git push
	git push origin `git subtree split --prefix build/web main`:gh-pages --force

NPM := $(shell command -v bun 2>/dev/null || command -v pnpm 2>/dev/null || command -v npm 2>/dev/null || command -v yarn 2>/dev/null)
TAURI := $(shell command -v cargo-tauri 2>/dev/null)
TAURI ?= $(NPM) tauri

.PHONY: all build-site deploy dev-site dev-app build-linux-app clean build-exe build-all

# Runs the website in develop mode
dev-site:
	$(NPM) run dev

# Runs the app in develop mode
dev-app:
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

build-all: build-site build-linux-app
	cp -r src-tauri/target/release/bundle/deb build/debian

# Builds the website for production and deploys it publicly
deploy-site: build-site
	git add .
	git commit -m "New build deployment"
	git push
	git push origin `git subtree split --prefix build/web main`:gh-pages --force

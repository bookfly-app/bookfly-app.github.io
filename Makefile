NPM := $(shell command -v bun 2>/dev/null || command -v pnpm 2>/dev/null || command -v npm 2>/dev/null || command -v yarn 2>/dev/null)
TAURI := cargo tauri
UNAME := $(shell uname -s)

.PHONY: all build-site deploy dev-site dev-app build-linux-app clean

# Runs the website in develop mode
dev-site:
	$(NPM) run dev

# Runs the app in develop mode
dev-app:
	$(TAURI) dev

# Builds the website for production
build-site:
	$(NPM) run build

# Builds the app for production as a native executable for the current system
build-linux-app:
ifeq ($(UNAME),Linux)
	NO_STRIP=true $(TAURI) build
else
	@echo "Linux app can on be built on Linux. Exiting."
endif

# Clean everything
clean:
	rm node_modules -rf
	rm build -rf
	rm src-tauri/target -rf
	$(NPM) install
	
# Builds the website for production and deploys it publicly
deploy-site: build-site
	touch build/.nojekyll
	touch build/CNAME
	echo "wallflower.land" >> build/CNAME
	git add .
	git commit -m "New build deployment"
	git push
	git push origin `git subtree split --prefix build main`:gh-pages --force

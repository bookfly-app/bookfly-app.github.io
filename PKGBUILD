# Maintainer: Violet Iapalucci <vi@wallflower.land>

pkgname="wallflower-land"
pkgver=0.1.0
pkgrel=1
pkgdesc="A social media client for readers and writers."
arch=('x86_64' 'aarch64')
url="https://github.com/wallflower-land/wallflower-land.github.io"
license=('All rights reserved')
depends=('cairo' 'desktop-file-utils' 'gdk-pixbuf2' 'glib2' 'gtk3' 'hicolor-icon-theme' 'libsoup' 'pango' 'webkit2gtk-4.1')
makedepends=('git' 'openssl' 'appmenu-gtk-module' 'libappindicator-gtk3' 'librsvg' 'cargo' 'pnpm' 'nodejs')
provides=('wallflower-land')
source=("git+${url}.git")
sha256sums=('SKIP')

pkgver() {
	cd wallflower-land
	sed -n 's/.*"version": *"\([^"]*\)".*/\1/p' src-tauri/tauri.conf.json
}

prepare() {
	cd wallflower-land
	pnpm install
}

build() {
	cd wallflower-land
	pnpm tauri build -b deb
}

package() {
	cp -a wallflower-land/src-tauri/target/release/bundle/deb/wallflower_${pkgver}_*/data/* "${pkgdir}"
}

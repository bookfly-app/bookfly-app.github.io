pkgname="wallflower-land"
pkgver=0.1.0
pkgrel=1
pkgdesc="A social media client for readers and writers."
arch=('x86_64' 'aarch64')
url="https://github.com/wallflower-app/wallflower-app.github.io"
license=('All rights reserved')
depends=('cairo' 'desktop-file-utils' 'gdk-pixbuf2' 'glib2' 'gtk3' 'hicolor-icon-theme' 'libsoup' 'pango' 'webkit2gtk-4.1')
makedepends=('git' 'openssl' 'appmenu-gtk-module' 'libappindicator-gtk3' 'librsvg' 'cargo' 'pnpm' 'nodejs')
provides=('wallflower-land')
source=("git+${url}.git")
sha256sums=('SKIP')

pkgver() {
  cd wallflower-land.github.io
  ( set -o pipefail
    git describe --long --abbrev=7 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short=7 HEAD)"
  )
}

prepare() {
  cd wallflower-land.github.io
  pnpm install
}

build() {
  cd wallflower-land.github.io
  pnpm tauri build -b deb
}

package() {
  cp -a wallflower-land.github.io/src-tauri/target/release/bundle/deb/wallflower-land.github.io_${pkgver}_*/data/* "${pkgdir}"
}

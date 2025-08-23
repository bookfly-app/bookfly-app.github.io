pkgname="wallflower-land"
pkgver=r129.fa6beee
pkgrel=1
pkgdesc="A social media client for readers and writers."
arch=('x86_64' 'aarch64')
url="https://github.com/wallflower-land/wallflower-land.github.io"
license=('All rights reserved')
depends=('cairo' 'desktop-file-utils' 'gdk-pixbuf2' 'glib2' 'gtk3' 'hicolor-icon-theme' 'libsoup' 'pango' 'webkit2gtk-4.1')
makedepends=('git' 'openssl' 'appmenu-gtk-module' 'libappindicator-gtk3' 'librsvg' 'cargo' 'npm' 'nodejs')
provides=('wallflower-land')
source=("git+${url}.git")
sha256sums=('SKIP')

pkgver() {
  cd wallflower-land
  ( set -o pipefail
    git describe --long --abbrev=7 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short=7 HEAD)"
  )
}

prepare() {
  cd wallflower-land
  npm install
}

build() {
  cd wallflower-land
  npm tauri build -b deb
}

package() {
  cp -a wallflower-land.github.io/src-tauri/target/release/bundle/deb/wallflower-land.github.io_${pkgver}_*/data/* "${pkgdir}"
}

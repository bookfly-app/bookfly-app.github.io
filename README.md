# Wallflower

All rights reserved. See [the license](./LICENSE.md) for details.

## Contributing

### Prerequisites

#### Linux


To build the app (not the website), Webkit2GTK and GTK 3 need to be installed:

**Arch:**

```bash
sudo pacman -S webkit2gtk gtk3
```


**Debian:**

```bash
sudo apt install libgtk-3-0 libwebkit2gtk-4.0-37
```

Note that there may be [an issue with installing `libwebkit2gtk4.0` on Debian based distros](https://github.com/tauri-apps/tauri/issues/9662).

The website can be deployed with the `deploy` script:

```bash
./scripts/deploy
```

Use it to quickly develop your Minecraft scripts with the Beta API.

## Usage

Clone this repository
```bash
git clone https://github.com/mcbe-mods/quick-start.git
code quick-start # Use VSCode open project
```

> If you don't have `pnpm` installed...
> ```bash
> corepack enable
> ```

Install the dependencies, at the end of the process a `manifest.json` file will be created in the `public\behavior_pack` and `public\resource_pack` directories, please modify the contents according to your needs.

If your `addon` doesn't need the `resource_pack`, you can delete it.
```bash
pnpm install
```

Start the project and open the game to create a new world, you will see your `addon` appear in the options bar, check it and enable it. Enter the game and use your bow to aim at ..... FIRE!!! 💥BOOM!!!
```bash
pnpm dev
```

Perform a packaged build and it will generate a `pack` directory where your package (xxxx.mcaddon) will appear
```bash
pnpm build
```

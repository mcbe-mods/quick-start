A simple template to help you quickly build the mcbe module development environment, when you are finished, you can execute npm run build to build the code and automatically packaged, packaged .mcaddon will be saved in the pack directory

## Usage

```
git clone https://github.com/mcbe-mods/quick-start.git
cd quick-start

# Install dependencies
pnpm install

# Building
pnpm run build

# dev: Automatically builds when file changes are found
pnpm run dev

# dev: Same as `pnpm run dev`, but with a new feature that automatically writes to the game directory (/Packages/Microsoft.MinecraftUWP_8wekyb3d8bbwe/LocalState/games/com.mojang), namely _dev_behavior_pack and _dev_resource_pack
pnpm run dev game
```

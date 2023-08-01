A simple template to help you quickly build the mcbe module development environment, when you are finished, you can execute npm run build to build the code and automatically packaged, packaged .mcaddon will be saved in the pack directory

## Usage

```
git clone https://github.com/mcbe-mods/quick-start.git
cd quick-start

# Install dependencies
## If you don't have pnpm, use the `npm install` command to install it.
pnpm install

# Building
npm run build

# dev: Automatically builds when file changes are found
npm run dev

# dev: Same as `npm run dev`, but with a new feature that automatically writes to the game directory (/Packages/Microsoft.MinecraftUWP_8wekyb3d8bbwe/LocalState/games/com.mojang), namely _dev_behavior_pack and _dev_resource_pack
npm run dev game
```
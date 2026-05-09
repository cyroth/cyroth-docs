---
title: Startlight docs in Obsidian
description: Create Starlight docs using Obsidian
draft: false
---
Here is a bit about my current setup
## Obsidian setup
### Community plugins
Plugins that I have added for this workflow
- [git](obsidian://show-plugin?id=obsidian-git) push to git from Obsidian and have the updates published
- [Edit MDX](obsidian://show-plugin?id=edit-mdx) add MDX to Obsidian
- [Hide Folders](obsidian://show-plugin?id=hide-folders) hide folders like node_modules or HTML directories
- [Templater](obsidian://show-plugin?id=templater-obsidian) use Astro compatible template by default
### Disabled plugins
Plugins that don't really work with this setup
- Bases
- Canvas
- Daily notes
- Tags view
### Templates
Create a template folder in the base so it isn't picked up by Astro collections with the mandatory frontmatter
```
---
title: 
description: 
---
```
Only title: is mandatory, but description is good to add anyway

Templater allows this to run automatically for new notes

## Astro setup
Not much really, just update your `.gitignore`

```
.trash/
.obsidian
```


# Trifecta Node

Quick static site boilerplate generator.

***

## Background

I like shell scripting for speeding up repetitive, procedural jobs. But sometimes I wonder if I depend on shell scripting too much, when I "should" be writing in Node.

Trifecta Node is a Node port of a very simple shell script I wrote that copies over basic HTML, CSS, and JavaScript boilerplate files to the current working directory, then runs `git init`.

## Original shell script

Here is the original shell script (`trifecta.sh`):

```
#!/bin/bash

# const current dir
readonly CURRENTDIR=$(pwd)

# const script dir
readonly SCRIPTDIR="/my-script-dir/trifecta/."

# copy all files from script dir to current dir
cp -R $SCRIPTDIR $CURRENTDIR
rm "$CURRENTDIR/generate.sh"
cd $CURRENTDIR && git init
```

... where `/my-script-dir/trifecta/` contains:

- index.html
- index.js
- style.css
- trifecta.sh

## Thoughts after porting the script

I still prefer the shell script.

Reasons:

- Node at least triples the number of lines of code in my script
- For some rather standard shell manuevers, I need to either:
	- Introduce 3rd party dependencies, _or_ 
	- Reinvent the wheel (adding even more code to my script)
- With three 3rd party dependencies, the total number of Node modules in my project is now 130


## Reasons often cited for why I should prefer doing things in Node

- You can write in JavaScript; you don't have to learn shell scripting
- Shell scripts are ugly
- Node scripts are more portable across different kinds of systems

Point taken. Node definitely wins here, especially on the last point.

My takeaway: this is a case of knowing when to choose the right tool for the job. For a simple script like this, I still think shell scripting wins, but for more complex jobs (especially those that need to run in multiple environments), Node is great.
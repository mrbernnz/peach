# Here's my Bash Stuff

## Make a folder and enter into it
```bash
function makeMe(){
  mkdir $1
  cd $1
}
```
Usage: `makeMe foldername`

## Bash Profile Access
```bash
alias getbash="subl ~/.bash_profile"
alias setbash="source ~/.bash_profile"
```
## Get Backbone/Underscore/jQuery/etc
```bash
function getBackbone(){
  cp [path to backbone file] .
  echo "Fetched Backbone"
}
```

## Git shortcuts
```bash
alias g='git status'
alias gp='git push'
alias gRemotes='git remote -v'
alias gAdd='git add -A'
alias gComm='git commit -m'
alias branches='git branch'

function gBranch(){
  git checkout $1
}
```
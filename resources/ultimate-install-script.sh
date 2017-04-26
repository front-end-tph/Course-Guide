#!/bin/bash

#HOW TO USE THIS SCRIPT:
##   download this file, or copy and paste all of its text into a file on your machine.
##   navigate in the terminal to the location of the file.
##   execute it using the command "bash <filename>". for example, "bash ultimate-install-script.sh."

set -e

echo 'Boostrapping your computer...'

# Install xcode command line tools
if [[ ! -x `xcode-select -p 2>/dev/null` ]]; then
  xcode-select --install
  echo 'Press any key when the installation has completed.'
  read -n 1
fi

# Install homebrew
if [[ ! -x /usr/local/bin/brew ]]; then
  echo 'Installing homebrew...'
  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
fi


###############################################################################
# SSH
###############################################################################

# ssh-keygen

#############

# setup casks/taps
brew tap homebrew/dupes
brew install homebrew/dupes/grep
brew install caskroom/cask/brew-cask
brew tap caskroom/versions

# terminal utils
binaries=(
  coreutils # Install GNU core utilities (those that come with OS X are outdated)
  findutils # Install GNU `find`, `locate`, `updatedb`, and `xargs`, g-prefixed
  bash # Install Bash 4
  graphicsmagick
  webkit2png
  ffmpeg
  python
  git
  node
  npm
  hub
  mongodb
  wget
)

# Apps
apps=(
  google-chrome
  atom
  flux
)

# "installing binaries..."
brew install ${binaries[@]}
# Install apps to /Applications
# Default is: /Users/$user/Applications
# "installing apps..."
brew cask install --appdir="/Applications" ${apps[@]}
brew cleanup

PATH=$(brew --prefix coreutils)/libexec/gnubin:$PATH

# Ask for the administrator password upfront
echo "\n enter admin password:"
sudo -v

# Keep-alive: update existing `sudo` time stamp until script has finished
while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2>/dev/null &

###############################################################################
# Class SETP
###############################################################################

curl https://raw.githubusercontent.com/TIY-Charleston-Front-End-Engineering/Course-Guide/master/resources/.bash_profile > ~/.bash_profile

mkdir ~/TIY
cd ~/TIY
mkdir assignments sandbox warmups notes

#!/bin/bash
set -x

npm install

apt-get install -y zsh && chsh -s /bin/zsh

#安裝 oh-my-zsh
wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh
sh install.sh

rm install.sh

#安裝 zsh theme: powerlevel10k
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

#把 .zshrc 中的 ZSH_THEME 改為 powerlevel10k/powerlevel10k
sed -i 's/ZSH_THEME="devcontainers"/ZSH_THEME="powerlevel10k\/powerlevel10k"/g' ~/.zshrc

echo 'POWERLEVEL9K_DISABLE_CONFIGURATION_WIZARD=true' >> ~/.zshrc
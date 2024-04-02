GIT_SSH_COMMAND="ssh -i ../.ssh/git_key" git pull
 npm run build
pm2 delete game
pm2 start "npm run start" -n game
pm2 save

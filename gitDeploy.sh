GIT_SSH_COMMAND="ssh -i ../.ssh/git_key" git pull
npm run build
pm2 delete website
pm2 start "npm run start " -n website
pm2 save

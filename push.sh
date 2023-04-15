#强制推送
#!/usr/bin/env bash
set -e
git init
git add -A
git commit -m '🎉 feat: init project'
git push -f "https://${access_token}@github.com/LiYeZhiXiu/vue-admin-beautiful.git" master
exec /bin/bash
# echo "# vue-admin-beautiful" >> README.md
# git init
# git add README.md
# git commit -m "first commit"
# git branch -M main
# git remote add origin https://github.com/LiYeZhiXiu/vue-admin-beautiful.git
# git push -u origin main

# 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





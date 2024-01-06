#!/usr/bin/env bash

# 删除dist目录，进行打包操作
rm -rf dist
npm run build

# 进入dist目录，进行git提交操作
cd dist
git init
git add .
git commit -m depoly
git remote add origin git@github.com:CongCong-1228/mangosteen-react-preview.git
git push -f origin master:master

# 返回之前的目录
cd -

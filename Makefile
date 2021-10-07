push-staging:
	git checkout staging
	git pull
	git add .
	git commit -m "autocommit"
	git push -u origin staging

push-main:
	git checkout main
	git pull
	git add .
	git commit -m "autocommit"
	git push -u origin main
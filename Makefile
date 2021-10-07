push-staging:
	git checkout staging
	git add .
	git commit -m "autocommit"
	git push -u origin staging
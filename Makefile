setup: backend-init frontend-init

backend-init:
	cd ./backend-api &&\
	python3 -m venv ./venv &&\
	./venv/bin/pip install -r requirements.txt

frontend-init:
	npm install

backend-start:
	cd ./backend-api && ./execute.sh

frontend-start:
	npm start
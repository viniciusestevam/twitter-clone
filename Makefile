.PHONY: install
install:
	cd frontend; yarn
	cd backend; yarn
	cd backend; docker build -t twitter-clone .
	docker run --name twitter-db -p 27017:27107 -d mongo:latest;
.PHONY: up
up:
	cd backend; docker run --name twitter-backend -d -p 8000:8000 twitter-clone
	cd frontend; yarn start
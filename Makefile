.PHONY: help infra-clean infra-rebuild infra-show-containers infra-show-images infra-show-logs infra-stop infra-up

default: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?##.*$$' $(MAKEFILE_LIST) | sort | awk '{split($$0, a, ":"); printf "\033[36m%-30s\033[0m %-30s %s\n", a[1], a[2], a[3]}'

########################################
#              INFRA                   #
########################################
infra-clean: ## to stop and remove containers, networks, images
	docker-compose down --rmi all

infra-rebuild: ## to clean and up all
	make infra-clean infra-up

infra-show-containers: ## to show all the containers
	docker-compose ps

infra-show-images: ## to show all the images
	docker images -a

infra-show-logs: ## to show logs from containers, specify "c=service_name" to filter logs by container
	docker-compose logs -ft ${c}

infra-stop: ## to stop all the containers
	docker-compose stop

infra-up: ## to create and start all the containers
	docker-compose up --build -d

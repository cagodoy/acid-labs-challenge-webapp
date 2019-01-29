docker_push dp:
	@echo "[docker_push] prepare push to docker hub..."
	@docker build -t acid-frontend .
	@docker tag acid-frontend cagodoy/acid-frontend:0.0.7
	@docker push cagodoy/acid-frontend:0.0.7

.PHONY: docker_push
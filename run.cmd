@echo off
start /b python -m SimpleHTTPServer 8080
explorer http://localhost:8080/default.html

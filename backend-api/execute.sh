#!/bin/bash

export PYTHONDONTWRITEBYTECODE=1
export PYTHONPATH="${PYTHONPATH}:${PWD}"
eval "./venv/bin/flask db upgrade"
eval "./venv/bin/flask run"
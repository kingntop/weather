#!/bin/bash
sudo -i -u spacebank bash << EOF

cd weather

/usr/bin/npx playwright test api
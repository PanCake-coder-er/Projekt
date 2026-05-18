#!/bin/bash

CPU_USAGE=$(top -bn1 | grep "Cpu(s)" | sed "s/.*, *\([0-9.]*\)%* id.*/\1/" | awk '{print 100 - $1}')
RAM_USAGE=$(free | grep Mem | awk '{print int($3/$2 * 100)}')
KUMA_URL="http://192.168.8.191:3001/api/push/3UocDo6BLD?status=up&msg=OK&ping="
curl -s "${http://192.168.8.191:3001/dashboard}?status=up&msg=CPU:${CPU_USAGE}%,RAM:${RAM_USAGE}%"

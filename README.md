<h1 align="center">Human-Centered Embedded Systems Projects</h1>

<p align="center">
  <img src="EmerTon/emerton.png" alt="Emerton GSM Emergency Device" width="48%" />
  <img src="EmerTon/tank_level.png" alt="Ultrasonic Tank Monitoring System" width="48%" />
</p>

# Human-Centered Embedded Systems Projects

This repository contains personal embedded systems projects focused on solving real-world problems using low-cost hardware and intelligent automation.

These projects were built to address practical challenges in rural and home environments using microcontrollers, GSM communication, ultrasonic sensing, and power-efficient design.

---

# 1️⃣ EMERTON – GSM-Based Emergency Alert Device

## Project Overview

EMERTON is a GSM-based emergency alert system designed and built to ensure the safety of my grandmother. The device enables a single-button emergency trigger that instantly sends an SMS notification to a predefined caregiver.

This project focuses on simplicity, reliability, and accessibility for elderly users.

---

## Problem Statement

Elderly individuals may not always be comfortable using smartphones during emergencies. A quick and reliable physical emergency trigger was required.

---

## System Workflow

Button Press  
→ Microcontroller detects trigger  
→ GSM module sends SMS  
→ Caregiver receives emergency notification  

---

## Hardware Components

- Microcontroller (Arduino / ESP32)
- GSM Module (SIM-based communication)
- Rechargeable Li-ion battery
- Charging module
- Push-button switch
- LED status indicator

---

## Key Features

- One-touch emergency activation
- GSM-based SMS notification
- Battery-powered portable design
- Low power consumption
- Reliable cellular communication
- Compact hardware form factor

---

## Real-World Impact

This project demonstrates how embedded systems can provide safety solutions for elderly individuals through simple and dependable hardware design.

---

# 2️⃣ TANK_LEVEL – Smart Ultrasonic Water Monitoring & Voice Alert System

## Project Overview

TANK_LEVEL is an ultrasonic-based water tank monitoring system designed to prevent water and electricity wastage in rural households.

In addition to LED level indication, the system includes a personalized Telugu voice alert when the tank reaches 85–90% capacity.

---

## Problem Statement

In rural areas, water tanks are filled using electric motors. The motor is usually turned off only after water overflows, leading to:

- Water wastage
- Electricity wastage
- Manual monitoring inconvenience
- Uncertainty about tank levels

---

## System Workflow

Ultrasonic sensor measures water distance  
→ Microcontroller calculates tank percentage  
→ LED indicators display level status  
→ At 85–90% capacity, speaker plays personalized Telugu alert  
→ (Optional) Relay module can cut off motor  

---

## Key Innovation – Voice Alert System

When water reaches approximately 85–90% capacity, the system plays a pre-recorded Telugu message:

“Motor apandi, tank almost full ayindi.”

This enables:

- Early overflow prevention
- Clear communication for family members
- Reduced manual supervision
- Human-centered automation

---

## Hardware Components

- Ultrasonic Sensor (HC-SR04)
- Arduino microcontroller
- LED indicators (Red / Yellow / Green)
- Audio playback module + speaker
- Relay module (optional motor control)
- Power supply

---

## Level Indication Logic

Red LED → Low water level  
Yellow LED → Medium level  
Green LED → Full  
Speaker Alert → 85–90% capacity reached  

---

## Key Features

- Real-time water level monitoring
- Visual LED-based status indication
- Personalized voice alert before overflow
- Reduces water wastage
- Reduces electricity wastage
- Designed for rural infrastructure conditions
- Low-cost embedded implementation

---

# Technology Stack

- Embedded C
- Arduino IDE
- GSM Communication (AT Commands)
- Ultrasonic distance measurement
- Audio module integration
- Battery power management

---

# Engineering Focus Areas

- Human-centered embedded design
- Rural infrastructure automation
- Low-power hardware systems
- GSM-based communication systems
- Sensor integration and threshold logic
- Real-world deployment practicality

---

## Author

Nithin Chakravarthi  
Embedded Systems & AI Engineer

---
id: creatingtests
title: Creating Netkit Test Labs
sidebar_label: Creating Tests
---

Each test in our testing suite has a configuration file and a lab folder associated with it. Here is an example config:

```
NAME=ABR Lab
DESCRIPTION=Simple lab with two machines joined by a router.
LAB_FOLDER=abr
LAB_TIMEOUT=90
FILES=ping_successful_a,ping_successful_b
FILES_TIMEOUT=90
```

A list of possible configuration settings can be found below.

| Name          | Description                                                                                         | Required / Optional                                           |
|---------------|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| NAME          | A human readable name of the test.                                                                  | Required                                                      |
| DESCRIPTION   | A description of the test.                                                                          | Required                                                      |
| LAB_FOLDER    | The folder that contains the lab files for the test.                                                | Required                                                      |
| LAB_TIMEOUT   | Number of seconds to wait for lstart to finish before marking the test as failed.                   | Required                                                      |
| FILES         | A list of comma seperated file names that indicate a test has been successful.                      | Required                                                      |
| FILES_TIMEOUT | Number of seconds to wait for all files listed in FILES to exist before marking the test as failed. | Required                                                      |
| TERMINAL      | A specific terminal emulator to use for this test.                                                  | Optional - defaults to user's terminal defined in netkit.conf |

Inside the lab folders, a systemd service named `netkit-validation.service` is used to automatically execute a test script (usually found at `/root/test.sh`). This test script is responsible for creating one/many of the files listed in the `FILES` configuration. Here's an example of one below, which repeatedly pings a machine until it responds. Once it responds, it creates the `ping_successful_a` file inside the `/hostlab` directory.

```bash
#!/bin/bash

# Repeatedly attempt to ping until successful
while true; do
	if ping -c 1 200.0.0.1; then
		touch /hostlab/ping_successful_a
		exit 0;
	fi
done
```

To create your own test, firstly create a configuration file inside `tests/configs`. The number at the front indicates the order in which the tests are ran (please select your number appropiately!) Make sure to configure all required options.

Create a lab folder inside `tests/labs/LAB_FOLDER` where LAB_FOLDER is the value of LAB\_FOLDER inside your config file.

Configure your machines and test scripts so that your `FILES` are created when the test is successful. We recommend looking at the ABR lab as a basis for your test.

:::tip
Keep your tests as simple as possible!
:::

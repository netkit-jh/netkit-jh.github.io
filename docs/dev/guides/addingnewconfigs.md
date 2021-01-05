---
id: addingnewconfigs
title: Adding New Configuration Options to netkit.conf
sidebar_label: Adding Config Options
---

When adding new configuration options to netkit.conf, adding the configuration option to netkit.conf is not sufficient. You must also add additional scripting to support updating user's existing configurations on reinstall.

This process is completed inside the `netkit-jh-build/core/setup_scripts/handle_config.sh` script.

Let's look at adding a new option `TUTORIAL_OPTION`. Firstly, we'll update the netkit.conf file.
```bash
#!/bin/false

# This script contains Netkit configuration parameters. It is not intended
# for standalone usage.

# Warning: none of the following parameters can include spaces in its value.

CONFIG_VERSION=2

...cut...

GRACE_TIME=1                    # Wait the specified amount of time (in seconds)
                                # before starting the next virtual machine. This
                                # is always enforced, but only useful when fast
                                # (-f option of lstart) or parallel startup is
                                # enabled.
TUTORIAL_OPTION=123				# This is an example option which demonstrates how
								# we should add new options to the netkit configuration.
```

We've appended our new option to the end of the document.

Now, we need to look at the `handle_config.sh` script. Notably, we can use the V1 -> V2 upgrade as a template.

```bash
# Upgrade from v1 to v2
# This upgrade can be used as a template for new upgrades.
# - Ensures CONFIG_VERSION has been defined. Any config without CONFIG_VERSION is considered V1.
if [ ${CURRENT_VERSION} -lt 2 ]; then
	echo "Upgrading Netkit configuration to V2."

	# Here, we can do anything else we'd want to do, for example, appending new options.
	
	# Finally, update the version.
	CURRENT_VERSION=2
	sed -i "s/CONFIG_VERSION=1/CONFIG_VERSION=2/g" ${NEW_DIR}/netkit.conf
fi
```

As we've added a new option, we need to increment the CONFIG_VERSION to 3. This ensures that whenever a user installs a new version of Netkit-JH with an older config, the new options are added to their configuration.

:::note
You only need to increment the CONFIG_VERSION if a new Netkit-JH version has been fully released since the last config version update. Otherwise, you can add your changes into the existing version increment. If you are unsure, increment the version anyways and it will be checked before your changes are merged into master. 
:::
```bash

# Upgrade from v2 to v3
# - Ensures TUTORIAL_OPTION has been defined.
if [ ${CURRENT_VERSION} -lt 3 ]; then
	echo "Upgrading Netkit configuration to V3."

	# Finally, update the version.
	CURRENT_VERSION=3
	sed -i "s/CONFIG_VERSION=2/CONFIG_VERSION=3/g" ${NEW_DIR}/netkit.conf
fi

```

We've copied the V1 -> V2 section, replacing any instances of 2 with a 3, and any instances of a 1 with a 2. We can now look at actually updating the configuration now.

As we have a new option, we can simply append the string from in netkit.conf 

```bash

echo "
TUTORIAL_OPTION=123				# This is an example option which demonstrates how
								# we should add new options to the netkit configuration.
" >> ${NEW_DIR}/netkit.conf
```

Let's look at the entire update function together.

```bash
# Upgrade from v2 to v3
# - Ensures TUTORIAL_OPTION has been defined.
if [ ${CURRENT_VERSION} -lt 3 ]; then
	echo "Upgrading Netkit configuration to V3."
	
	echo "
	TUTORIAL_OPTION=123				# This is an example option which demonstrates how
									# we should add new options to the netkit configuration.
	" >> ${NEW_DIR}/netkit.conf

	# Finally, update the version.
	CURRENT_VERSION=3
	sed -i "s/CONFIG_VERSION=2/CONFIG_VERSION=3/g" ${NEW_DIR}/netkit.conf
fi
```

That's it! For new options, you will want to append a string to the end of the file. For removing options or modifying options, `sed -i` is your friend.

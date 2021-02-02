import ReactHtmlParser from 'react-html-parser';

const raw = `
<h1>NAME</h1>
<p>netkit.conf - Netkit configuration file</p>
<h1>DESCRIPTION</h1>
<p>This file contains information about the Netkit configuration. It also stores the default settings to be used when starting new virtual machines. A copy of this file can be placed into the standard directories listed in the <strong>FILES</strong> section. Thus, <em>netkit.conf</em> can be used to define both system wide and user specific settings.</p>
<p>The file format is very simple. <em>netkit.conf</em> is nothing but a special shell script which contains definitions of environment variables. Hence, it is a list of <em>PARAMETER</em>=<em>VALUE</em> assignments.</p>
<p>No check is performed on the correctness of the configuration, so <em>VALUE</em> must always be a valid setting (allowed range of values depends on the specific <em>PARAMETER</em> being considered). Failure to comply to this constraint may result in unpredictable behaviour. Moreover, it is very important that no <em>VALUE</em> contains space characters.</p>
<p><em>PARAMETER</em> can be one of the following.</p>
<h2>Generic Netkit configuration parameters</h2>
<dl>
<dt><strong>LOGFILENAME</strong></dt>
<dd><p>Name of the file that stores a log of the issued Netkit commands. Every time a Netkit command is executed (e.g., <em>vstart</em>, <em>vhalt</em>, etc.), an entry containing the name of the command, the user who started it and a timestamp is added to this file. Different users can share the same file. Setting this parameter to an empty string disables command logging.</p>
</dd>
</dl>
<p><em>Suggested value</em>: $NETKIT_HOME/netkit_commands.log<br />
<em>Default if no setting</em>: "" (logging disabled)</p>
<dl>
<dt><strong>MCONSOLE_DIR</strong></dt>
<dd><p>This is the name of a directory that stores temporary socket files used to send directives to running virtual machines. Each user should set this value to a different directory (otherwise, conflicts may occur when different users run virtual machines having the same name).</p>
</dd>
</dl>
<p><em>Suggested value</em>: $HOME/.netkit/mconsole<br />
<em>Default if no setting</em>: $HOME/.netkit/mconsole</p>
<dl>
<dt><strong>HUB_SOCKET_DIR</strong></dt>
<dd><p>This is the directory in which temporary socket files used by the virtual hubs are placed. Different users can share the same directory. Thus, setting this parameter to a standard temporary directory like ''/tmp/uml'' is allowed.</p>
</dd>
</dl>
<p><em>Suggested value</em>: $HOME/.netkit/hubs<br />
<em>Default if no setting</em>: $HOME/.netkit/hubs</p>
<dl>
<dt><strong>HUB_SOCKET_PREFIX</strong></dt>
<dd><p>Temporary socket files used by the virtual hubs are named according to a standard pattern. This parameter allows to configure the prefix that should be used in the name of every socket file. This is useful, for example, in order to ease recognizing these special files.<br />
This parameter must not contain underscores ('<strong>_</strong>') or commas ('<strong>,</strong>').</p>
</dd>
</dl>
<p><em>Suggested value</em>: vhub<br />
<em>Default if no setting</em>: vhub</p>
<dl>
<dt><strong>HUB_SOCKET_EXTENSION</strong></dt>
<dd><p>Similarly to <strong>HUB_SOCKET_PREFIX</strong>, it is also possible to configure the standard extension to be used for socket file names.<br />
This parameter must not contain underscores ('<strong>_</strong>') or commas ('<strong>,</strong>'), and must always start with a dot ('<strong>.</strong>').</p>
</dd>
</dl>
<p><em>Suggested value</em>: .cnct<br />
<em>Default if no setting</em>: .cnct</p>
<dl>
<dt><strong>HUB_LOG</strong></dt>
<dd><p>Each virtual hub may produce messages reporting error conditions or information about its status. All these messages are stored inside a log file whose name is the one configured in <strong>HUB_LOG</strong>. This logging service cannot be disabled; hence, empty names are not allowed for this parameter. Different users can share the same file.</p>
</dd>
</dl>
<p><em>Suggested value</em>: $HUB_SOCKET_DIR/vhubs.log<br />
<em>Default if no setting</em>: $HUB_SOCKET_DIR/vhubs.log</p>
<dl>
<dt><strong>USE_SUDO</strong></dt>
<dd><p>This parameter determines how root privileges will be acquired when system-wide configurations need to be applied (e.g., a tap interface needs to be set up). If set to <strong>yes</strong>, then Netkit will use the <strong>sudo</strong>(8) command for the purpose. By suitably setting up the <strong>sudoers</strong>(5) file, this can prevent the user from having to type the root password every time.<br />
If set to <strong>no</strong>, then Netkit will use the <em>su</em> command instead, which requires inserting the root password for each privileged operation that needs to be carried out.<br />
For more information about how to set up the <strong>sudoers</strong>(5) file, see the section <strong>SETTING UP NETKIT FOR USE WITH SUDO</strong> below.</p>
</dd>
</dl>
<p><em>Suggested value</em>: yes<br />
<em>Default if no setting</em>: yes</p>
<h2>Default settings for newly started virtual machines</h2>
<dl>
<dt><strong>VM_MEMORY</strong></dt>
<dd><p>This is the default amount of available memory inside the virtual machines, in MB.</p>
</dd>
</dl>
<p><em>vstart options</em>: <strong>--mem</strong>, <strong>-M</strong><br />
<em>Suggested value</em>: 16<br />
<em>Default if no setting</em>: 16</p>
<dl>
<dt><strong>VM_MEMORY_SKEW</strong></dt>
<dd><p>Starting a virtual machine requires allocating a certain amount of memory on the host machine. This amount depends on the amount of available memory inside the virtual machine (i.e., how much memory you decided to equip the machine with). However, some extra memory is needed for kernel structures and other stuff. Hence, the actual amount of consumed memory is slightly larger than that of available memory inside the emulation. That is, there a skew between consumed memory and emulated memory.<br />
This parameter allows adjusting the skew so that proper values are returned by commands showing memory statistics (e.g., <em>vlist</em> on the host machine – see <strong>vlist</strong>(1) – and 'free -m' inside the virtual machine). The skew is expressed in MB units.</p>
</dd>
</dl>
<p><em>Suggested value</em>: 4<br />
<em>Default if no setting</em>: 4</p>
<dl>
<dt><strong>VM_MODEL_FS</strong></dt>
<dd><p>This is the name of the default model filesystem. For more information about <em>model filesystem</em>s, see the README in the Netkit filesystem package and the man page of <strong>vstart</strong>(1). Remember that COW files must always be used in combination with the same model filesystem (i.e., it is not possible to arbitrarily mix COW files and model files).</p>
</dd>
</dl>
<p><em>vstart options</em>: <strong>--model-fs</strong>, <strong>-m</strong><br />
<em>Suggested value</em>: $NETKIT_HOME/fs/netkit-fs<br />
<em>Default if no setting</em>: $NETKIT_HOME/fs/netkit-fs</p>
<dl>
<dt><strong>VM_KERNEL</strong></dt>
<dd><p>This is the name of the UML kernel used by virtual machines. Even if there is no particular restriction on the kernel to be used, the virtual machine filesystem must store system tools which are compatible with the kernel being used. Moreover, some filesystems support loading of kernel modules (the one shipped with Netkit does). If this is the case, the kernel must have been compiled with support for external modules, and modules must be available inside a special directory (see the README in the Netkit kernel package for details on how to do this).</p>
</dd>
</dl>
<p><em>vstart options</em>: <strong>--kernel</strong>, <strong>-k</strong><br />
<em>Suggested value</em>: $NETKIT_HOME/kernel/netkit-kernel<br />
<em>Default if no setting</em>: $NETKIT_HOME/kernel/netkit-kernel</p>
<dl>
<dt><strong>VM_CON0</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>VM_CON1</strong></dt>
<dd><p>These parameters allow to configure the default device to which the primary (<strong>VM_CON0</strong>) and secondary (<strong>VM_CON1</strong>) virtual machine consoles should be attached. Allowed values for this setting are:</p>
<dl>
<dt><strong>none</strong></dt>
<dd><p>Completely disable console (note that disabling both the primary and the secondary console makes you unable to reach the virtual machine unless it runs some remote shell service or other daemon).</p>
</dd>
<dt><strong>xterm</strong></dt>
<dd><p>Attach console to a terminal emulator application.</p>
</dd>
<dt><strong>this</strong></dt>
<dd><p>Attach console to the current terminal. At most one between the primary and secondary console can be configured to use the current terminal.</p>
</dd>
<dt><strong>pty</strong></dt>
<dd><p>Attach console to a pseudo terminal.</p>
</dd>
<dt><strong>port:<em>port-number</em></strong></dt>
<dd><p>Attach console to TCP port <em>port-number</em>. You can later reach it by telnetting to this port. Consider that the virtual machine is not actually started until you do so. Moreover, disconnecting while the machine is still running and later reconnecting is not possible: only a single connection is supported. If you happen to accidentally disconnect before halting the virtual machine, you can still stop it by using either <em>vhalt</em> or <em>vcrash</em> (see <strong>vhalt</strong>, <strong>vcrash</strong>).</p>
</dd>
</dl>
<p><em>vstart options</em>: <strong>--con0</strong>, <strong>--con1</strong><br />
<em>Suggested value</em>: xterm (for <strong>VM_CON0</strong>), none (for <strong>VM_CON1</strong>)<br />
<em>Default if no setting</em>: xterm (for <strong>VM_CON0</strong>), none (for <strong>VM_CON1</strong>)</p>
</dd>
</dl>
<dl>
<dt><strong>USE_TMUX</strong></dt>
<dd><p>Run the vm inside a tmux session on the host this means you can then connect and disconnect from it when you want (using the vconnect command) and send commands to it with vcommand.</p>
<dl>
<dt><strong>TRUE</strong></dt>
<dd><p>Run VM in tmux session.</p>
<dl>
<dt><strong>FALSE</strong></dt>
<dd><p>Do not run VM in tmux session.</p>
</dd>
<dt><strong>TMUX_OPEN_TERMS</strong></dt>
<dd><p>Open a terminal with the tmux session for the machine this will run vconnect in the background to attempt to connect. N.b. this has a timeout - if the tmux session fails to open this will eventually stop polling it. This option only takes effect when USE_TMUX is true.</p>
<dl>
<dt><strong>TRUE</strong></dt>
<dd><p>Attempt to open a terminal connected to the tmux session for the machine.</p>
<dl>
<dt><strong>FALSE</strong></dt>
<dd><p>No terminals are opened. You can connect to the machine manually with vconnect.</p>
</dd>
<dt><strong>TERM_TYPE</strong></dt>
<dd><p>This parameter determines the terminal emulator application to be used for consoles attached to an <strong>xterm</strong> device. The application must be correctly installed in the host system. The following values are allowed.</p>
<dl>
<dt><strong>xterm</strong></dt>
<dd><p>Use the standard XTerm.</p>
</dd>
<dt><strong>konsole</strong></dt>
<dd><p>Use the KDE Desktop Environment konsole.</p>
</dd>
<dt><strong>konsole-tabs</strong></dt>
<dd><p>Same as <strong>konsole</strong>, but different virtual machine consoles are opened inside different tabs of the same konsole window.</p>
</dd>
<dt><strong>gnome</strong></dt>
<dd><p>Use the Gnome Desktop gnome-terminal.</p>
</dd>
</dl>
<p><em>vstart options</em>: <strong>--xterm</strong><br />
<em>Suggested value</em>: xterm<br />
<em>Default if no setting</em>: xterm</p>
</dd>
</dl>
<dl>
<dt><strong>CON0_PORTHELPER</strong></dt>
<dd><p>This parameter should only be used in debugging issues in attaching the primary console of virtual machines. When the primary console is attached to a terminal emulator, Netkit can attempt to open the emulator in two different ways:</p>
<dl>
<dt>—</dt>
<dd><p>by directly starting the virtual machine kernel inside the terminal emulator, or</p>
</dd>
<dt>—</dt>
<dd><p>by letting the virtual machine kernel open the terminal emulator on its own.</p>
</dd>
</dl>
<p>The second method is deemed as more standard when using User Mode Linux kernels (like Netkit's), but is slightly less efficient and more prone to crashes, as it relies on a separate software piece (the <em>port-helper</em>) for establishing a communication between the kernel and the terminal emulator. The first method is more efficient and robust and, for this reason, is currently adopted as default choice.</p>
<p>No matter what the value of this parameter is, the secondary terminal will always be opened using the second strategy.</p>
<p><em>Suggested value</em>: no<br />
<em>Default if no setting</em>: no</p>
</dd>
</dl>
<dl>
<dt><strong>MAX_INTERFACES</strong></dt>
<dd><p>This is the maximum number of network interfaces a virtual machine can be equipped with. Valid interface numbers will range from 0 to <strong>MAX_INTERFACES</strong>-1 (e.g., if <strong>MAX_INTERFACES</strong> is 2 only interfaces <strong>eth0</strong> and <strong>eth1</strong> can be used).</p>
</dd>
</dl>
<p><em>Suggested value</em>: 40<br />
<em>Default if no setting</em>: 40</p>
<p><strong>MIN_MEM</strong></p>
<dl>
<dt><strong>MAX_MEM</strong></dt>
<dd><p>These parameters define the minimum and maximum tolerated amount of available emulated memory inside virtual machines, in MB. These values can be set so that users are prevented from consuming too many resources on the host machine.</p>
</dd>
</dl>
<p><em>Suggested value</em>: 8 (for <strong>MIN_MEM</strong>), 512 (for <strong>MAX_MEM</strong>)<br />
<em>Default if no setting</em>: 8 (for <strong>MIN_MEM</strong>), 512 (for <strong>MAX_MEM</strong>)</p>
</dd>
</dl>
</dd>
</dl>
</dd>
</dl>
</dd>
</dl>
<h2>Default settings for lab commands</h2>
<dl>
<dt><strong>MAX_SIMULTANEOUS_VMS</strong></dt>
<dd><p>This is the maximum number of virtual machines that can be simultaneously started when using parallel startup. This value must be a positive integer. A value of 0 corresponds to setting no limit. For more information about parallel startup, see <strong>lstart</strong>(1).</p>
</dd>
</dl>
<p><em>lstart options</em>: <strong>-p</strong><br />
<em>Suggested value</em>: 5<br />
<em>Default if no setting</em>: 5</p>
<dl>
<dt><strong>GRACE_TIME</strong></dt>
<dd><p>This value represents the number of seconds to wait for before launching the next virtual machine. This parameter is only useful when using <strong>lstart</strong>(1) in fast mode or when using parallel startup. For more information, see <strong>lstart</strong>(1).</p>
</dd>
</dl>
<p><em>lstart options</em>: <strong>--wait</strong>, <strong>-w</strong><br />
<em>Suggested value</em>: 0 (for labs with less than 4 machines), more than 5 (for labs with more than 4 machines).<br />
<em>Default if no setting</em>: 0</p>
<h1>SETTING UP NETKIT FOR USE WITH SUDO</h1>
<p>From time to time, Netkit requires administrative privileges on the host machine to set up particular configurations (e.g., ''<strong>tap</strong>'' interfaces). Netkit can exploit either the <strong>su</strong>(1) or the <strong>sudo</strong>(8) command in order to do this. This behaviour can be configured by changing the value of the <strong>USE_SUDO</strong> parameter. Depending on this choice, Netkit will ask for a different password: for the case of <strong>su</strong>(1) it is the root password, while for the case of <strong>sudo</strong>(8) it usually is the user's password. In most setups, <strong>sudo</strong>(8) is able to keep user authentication information for a certain amount of time during which the password is not requested any longer, even for administrative operations. For this reason, by default Netkit uses <strong>sudo</strong>(8).</p>
<p>By changing the <strong>sudoers</strong>(5) file it is possible to completely disable the password prompt, so that the password is never requested (not even the first time) for any administrative operations.</p>
<p><strong>***************************************************************</strong> <strong>*** WARNING *** *** WARNING *** *** WARNING *** *** WARNING ***</strong> <strong>***************************************************************</strong></p>
<dl>
<dt></dt>
<dd><p>By applying the following configuration you enable the affected user to start a shell (therefore any other command) on your host with root privileges, without any passwords being asked for. Put in other words, by enabling the following setting, a user of your choice is entitled to freely gain root privileges and run whichever command she wants without anyone asking her for a password.</p>
</dd>
</dl>
<p>This may be an intentional setting on your machine if you frequently perform administrative operations, but in the general case</p>
<p>please apply this change only if you are aware of the consequences.</p>
<p><br />
</p>
<p>In order to allow user <em>USERNAME</em> to gain root privileges without being asked for a password, you need to edit the <em>/etc/sudoers</em> file. Since the contents of this file are deemed critical for your system security, it is recommended to edit the file using <strong>visudo</strong>(8), which prevents multiple simultaneous edits and applies other sanity checks before applying the changes. Of course, other editors may be used as well.</p>
<p>Once you have opened the file, you need to append the following line at the end:</p>
<pre><code>USERNAME ALL = NOPASSWD: /bin/sh</code></pre>
<p>where <em>USERNAME</em> is the name of the affected Netkit user, ALL means that this setting will work on all machines (read as: ''no matter what the name of the machine you are setting this on is, the setting will work''), NOPASSWD means that the following commands can be executed with an arbitrary user ID (including root's), and /bin/sh is the name of the command.</p>
<h1>ENVIRONMENT VARIABLES</h1>
<p>Some configuration parameters can be overridden by simply defining an environment variable. A list of supported variables follow.</p>
<dl>
<dt><strong>NETKIT_FILESYSTEM</strong></dt>
<dd><p>Name of the default model filesystem.</p>
</dd>
</dl>
<p><em>Corresponding parameter</em>: <strong>VM_MODEL_FS</strong></p>
<dl>
<dt><strong>NETKIT_MEMORY</strong></dt>
<dd><p>Default amount of available memory inside virtual machines.</p>
</dd>
</dl>
<p><em>Corresponding parameter</em>: <strong>VM_MEMORY</strong></p>
<dl>
<dt><strong>NETKIT_KERNEL</strong></dt>
<dd><p>Name of the UML kernel used by virtual machines</p>
</dd>
</dl>
<p><em>Corresponding parameter</em>: <strong>VM_KERNEL</strong></p>
<dl>
<dt><strong>NETKIT_CON0</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>NETKIT_CON1</strong></dt>
<dd><p>Device to which the primary and secondary consoles are attached.</p>
</dd>
</dl>
<p><em>Corresponding parameter</em>: <strong>VM_CON0</strong>, <strong>VM_CON1</strong></p>
<dl>
<dt><strong>NETKIT_TERM</strong></dt>
<dd><p>Terminal emulator application to be used for consoles in <strong>xterm</strong> mode.</p>
</dd>
</dl>
<p><em>Corresponding parameter</em>: <strong>TERM_TYPE</strong></p>
<h1>SAMPLE netkit.conf FILE</h1>
<pre><code>#!/bin/false
# The above line prevents execution of this file

LOGFILENAME=&quot;$NETKIT_HOME/netkit_commands.log&quot;

MCONSOLE_DIR=&quot;$HOME/.netkit/mconsole&quot;
HUB_SOCKET_DIR=&quot;$HOME/.netkit/hubs&quot;

HUB_SOCKET_PREFIX=&quot;vhub&quot;
HUB_SOCKET_EXTENSION=&quot;.cnct&quot;
HUB_LOG=&quot;$HUB_SOCKET_DIR/vhubs.log&quot;
USE_SUDO=yes

VM_MEMORY=32
VM_MEMORY_SKEW=4
VM_MODEL_FS=&quot;$NETKIT_HOME/fs/netkit-fs&quot;
VM_KERNEL=&quot;$NETKIT_HOME/kernel/netkit-kernel&quot;

VM_CON0=xterm
VM_CON1=none
CON0_PORTHELPER=no
TERM_TYPE=xterm

MAX_INTERFACES=40
MIN_MEM=8
MAX_MEM=512

MAX_SIMULTANEOUS_VMS=5
GRACE_TIME=0</code></pre>
<h1>FILES</h1>
<p><em>netkit.conf</em> can be placed in one of the following locations. If multiple instances exist, they will be processed in the order in which they are listed below (each processed file overrides settings configured by the previous one).</p>
<dl>
<dt><em>/etc/netkit.conf</em></dt>
<dd><p>This instance of the <em>netkit.conf</em> file can be used to configure system wide settings.</p>
</dd>
<dt><em>$NETKIT_HOME/netkit.conf</em></dt>
<dd><p>This file may contain settings that are specific for a certain Netkit distribution.</p>
</dd>
<dt><em>~/.netkit/netkit.conf</em></dt>
<dd><p>This file contains user specific settings.</p>
</dd>
</dl>
<h1>SEE ALSO</h1>
<p><em>lstart</em>(1), <em>netkit</em>(7), Netkit filesystem README, Netkit kernel README, <em>vstart</em>(1).</p>
<h1>AUTHOR</h1>
<p>This man page: Massimo Rimondini</p>
`

const html = ReactHtmlParser(raw);
export default html;

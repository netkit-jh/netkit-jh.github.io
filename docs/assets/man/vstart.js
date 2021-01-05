import ReactHtmlParser from 'react-html-parser';

const raw = `
<h1>NAME</h1>
<p>vstart - start a new netkit virtual machine</p>
<h1>SYNOPSIS</h1>
<p><strong>vstart</strong> [options] <em>MACHINE-NAME</em></p>
<h1>DESCRIPTION</h1>
<p>The <em>vstart</em> command can be used to start a new virtual machine named <em>MACHINE-NAME</em>. Names of virtual machines must be unique for each user. Yet, different users can run machines having the same name.</p>
<p>Without providing options, <em>vstart</em> starts a virtual machine whose configuration reflects the defaults stored inside the <em>netkit.conf</em> file (see <strong>netkit.conf</strong>(5)). The options described below can be used to adjust the features of a virtual machine upon starting it.</p>
<p>Notice: unless differently stated, command line arguments (<em>MACHINE-NAME</em>), option arguments (e.g., names of collision domains), and any path name (including the path to the current directory at the time of invoking <em>vstart</em>) should not contain space characters. Not complying to this causes <em>vstart</em> to raise an error.</p>
<h2>Hardware/Kernel settings</h2>
<dl>
<dt><strong>-k <em>FILENAME</em></strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--kernel=<em>FILENAME</em></strong></dt>
<dd><p>Each virtual machine can have its own kernel. By using this option, it is possible to explicitly choose which kernel should be used for the machine being started. <em>FILENAME</em> must be a UML kernel. The default kernel is configured inside the <em>netkit.conf</em> file (see <strong>netkit.conf</strong>(5)).</p>
</dd>
<dt><strong>-M <em>MEMORY</em></strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--mem=<em>MEMORY</em></strong></dt>
<dd><p>Set the amount of available RAM inside the virtual machine to <em>MEMORY</em> MB. The range of valid amounts and the default amount of memory are both defined inside the <em>netkit.conf</em> file (see <strong>netkit.conf</strong>(5)). Notice that the memory consumed by the virtual machine processes on the host machine can be slightly larger than this value.</p>
</dd>
</dl>
<h2>Networking settings</h2>
<dl>
<dt><strong>--eth<em>N</em>=<em>DOMAIN</em></strong></dt>
<dd><p>Equip virtual machine with a network interface <strong>eth</strong><em>N</em>. <em>N</em> is an integer ranging from 0 to a maximum value stored inside the <em>netkit.conf</em> file (see <strong>netkit.conf</strong>(5)).</p>
</dd>
</dl>
<p>Interface <strong>eth</strong><em>N</em> will be attached to a (virtual) collision domain whose name is <em>DOMAIN</em>. A collision domain can be seen as a sort of virtual hub. Thus, attaching interfaces of different virtual machines to the same collision domain allows them to exchange network traffic. <em>DOMAIN</em> must not contain underscores ('<strong>_</strong>'), commas ('<strong>,</strong>') and dots ('<strong>.</strong>'), unless a ''<strong>tap</strong>'' collision domain is being configured (see below).</p>
<p>The special domain name ''<strong>tap</strong>'' is reserved. When attaching an interface to a ''<strong>tap</strong>'' domain, an external (i.e., real) network can be reached through this interface. A ''<strong>tap</strong>'' collision domain must be declared with the following syntax:</p>
<pre><code>--ethN=tap,TAP-ADDRESS,GUEST-ADDRESS</code></pre>
<p>where <em>TAP-ADDRESS</em> is the IP address of the host side of the interface and <em>GUEST-ADDRESS</em> is the IP address of the interface inside the virtual machine (guest side). <em>TAP-ADDRESS</em> and <em>GUEST-ADDRESS</em> must be on the same (sub)network and, most important, this network must <em>not</em> already exist on your host network (otherwise routing would be messed up). Interfaces connected to a ''<strong>tap</strong>'' collision domain are automatically configured and brought up inside virtual machines.</p>
<p>There can be at most one ''<strong>tap</strong>'' collision domain for each user. Hence, if different virtual machines are configured for using ''<strong>tap</strong>'' connected interfaces, they also are on the same collision domain. <em>TAP-ADDRESS</em> is mandatory, but is only taken into account when a ''<strong>tap</strong>'' collision domain is first used (i.e., this is the first interface the current user ever connected to a ''<strong>tap</strong>'' collision domain). Otherwise, it simply ignored.</p>
<p><strong>*** IMPORTANT NOTES ABOUT USING ''tap'' COLLISION DOMAINS ***</strong></p>
<blockquote>
<dl>
<dt>–</dt>
<dd><p>Configuring ''<strong>tap</strong>'' domains for the first time requires administrative (root) privileges. The <em>vstart</em> script will take care of asking you for the root password if needed. For more information about how Netkit gains root privileges, see <strong>USE_SUDO</strong> and <strong>SETTING UP NETKIT FOR USE WITH SUDO</strong> in the man page of <strong>netkit.conf</strong>(5). The following operations are performed when working as root:</p>
</dd>
</dl>
<p>1) The '/dev/net/tun' device is created (if it does not exist).<br />
2) Permissions for the '/dev/net/tun' device are set to 666 (read/write for all users).<br />
3) Any existing network device named 'nk_tap_<em>USERNAME</em>' is brought down and removed (<em>USERNAME</em> is the name of the current user).<br />
4) A tap network device named 'nk_tap_<em>USERNAME</em>' is created and configured to have IP address <em>TAP-ADDRESS</em>.<br />
5) Kernel based IP forwarding is enabled via the '/proc/sys/net/ipv4/ip_forward' special file.<br />
6) If the iptables firewall is found, packet forwarding for data coming from the tap interface is enabled. Also, masquerading is enabled. More precisely, the following rules are added to the current iptables configuration:</p>
<p>*nat<br />
-A POSTROUTING -j MASQUERADE<br />
*filter<br />
-A FORWARD -i nk_tap_+ -j ACCEPT</p>
<p>All these configuration settings can be easily removed by using the <strong>vclean</strong> command (see <strong>vclean</strong>(1)).</p>
<dl>
<dt>–</dt>
<dd><p>Using ''<strong>tap</strong>'' domains requires some host-side configurations. These configurations are not automatically removed after halting virtual machines. The <strong>vclean</strong> command must be used for this purpose (see <strong>vclean</strong>(1)).</p>
</dd>
</dl>
</blockquote>
<h2>Filesystem settings</h2>
<dl>
<dt><strong>-H</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--no-hosthome</strong></dt>
<dd><p>By default, the home directory of the current user is made available for reading/writing inside the virtual machine under the special directory '/hosthome'. This option disables this behaviour, thus not making the host filesystem accessible from inside the virtual machine.</p>
</dd>
<dt><strong>-m <em>MODEL-FILESYSTEM</em></strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--model-fs=<em>MODEL-FILESYSTEM</em></strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>-f <em>FILESYSTEM</em></strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--filesystem=<em>FILESYSTEM</em></strong></dt>
<dd><p>Virtual machines need two special files which contain their filesystem.</p>
<dl>
<dt>–</dt>
<dd><p>The whole filesystem of the virtual machine is stored inside a <em>model file</em> (also called <em>backing file</em>). Upon first startup, every virtual machine has the same filesystem, which is the one stored in the <em>model file</em>.<br />
The default name of this file is stored inside the file <em>netkit.conf</em> (see <strong>netkit.conf</strong>(5)). By explicitly specifying a <em>MODEL-FILESYSTEM</em>, a different model file can be used. <em>MODEL-FILESYSTEM</em> is the name of a file that stores an entire model filesystem for the virtual machines.</p>
</dd>
<dt>–</dt>
<dd><p>Changes being made to the model filesystem are stored in a different file, based on a <em>COW</em> (<em>Copy on Write</em>) strategy: whatever is written to the filesystem is stored in an external file instead of overwriting the model filesystem.<br />
By default, every virtual machine has its own <em>COW file</em>. Such file is created in the current directory as soon as the virtual machine is first started. Its name is the same as the name of the virtual machine plus the suffix ''.disk''. For example, assuming the current directory is '/home/foo/', starting a new virtual machine named ''pc1'' automatically creates the file '/home/foo/pc1.disk'.<br />
By passing a <em>FILESYSTEM</em> name it is possible to use a different COW file. If <em>FILESYSTEM</em> is not found, a new file with this name is created. Otherwise, <em>FILESYSTEM</em> must be the name of a COW file that has been previously created by a virtual machine.<br />
Consider that COW files are never automatically removed after a machine has been halted or crashed (unless proper options of <strong>vhalt</strong> or <strong>vcrash</strong> are being used). This allows to preserve filesystem contents across reboots of the virtual machine.</p>
</dd>
</dl>
<p>Both <em>MODEL-FILESYSTEM</em> and <em>FILESYSTEM</em> must not contain commas ('<strong>,</strong>') in their names.</p>
<p>Options <strong>-f</strong> and <strong>--filesystem</strong> cannot be used in conjunction with <strong>-W</strong> or <strong>--no-cow</strong>.</p>
<p><strong>Notice</strong>: it is not possible to combine a <em>COW file</em> with different <em>model file</em>s. Hence, virtual machines must always be started with the combination of <em>model</em> and <em>COW file</em> used upon their first startup.</p>
<p><strong>*** IMPORTANT NOTES ABOUT THE HOST MACHINE FILESYSTEM ***</strong></p>
<p>In principle, there is no particular restriction on the choice of the filesystem (of the host machine) on which <em>MODEL-FILESYSTEM</em> and <em>FILESYSTEM</em> are located. However, installing Netkit on a machine that uses a non-standard Linux filesystem (e.g., FAT32) may introduce performance losses and/or malfunctions. Please refer to the README file in the Netkit filesystem package for more information about this.</p>
</dd>
</dl>
<dl>
<dt><strong>-W</strong></dt>
<dd>
</dd>
<dt><strong>--no-cow</strong></dt>
<dd><p>Instead of using two different files for storing filesystem data (as explained above), write filesystem changes directly on the model filesystem.</p>
</dd>
</dl>
<p><em>Never start two virtual machines with the </em><strong>-W</strong><em>q option</em>, or your filesystem image may get corrupted!</p>
<p>This option cannot be used in conjunction with <strong>-f</strong>,</p>
<p><strong>--filesystem</strong>,</p>
<p><strong>-D</strong>, or</p>
<p><strong>--hide-disk-file</strong>.</p>
<p><strong>Warning</strong>: by using this option, all the changes being made to the filesystem of the virtual machine are made permanent. Do <strong>not</strong> use this option unless you know what you are doing!</p>
<dl>
<dt><strong>-D</strong></dt>
<dd>
</dd>
<dt><strong>--hide-disk-file</strong></dt>
<dd><p>By using this option, the ''.disk'' file of virtual machines is no longer created (actually, it is deleted soon after it is created). This is useful if you do not want to scatter temporary disk images around your filesystem. Using this option does not compromise in any way the operation of virtual machines, except, of course, that the contents of virtual machine filesystems are irremediably lost as soon as the machines are stopped.</p>
</dd>
</dl>
<p>This option cannot be used in conjunction with <strong>-W</strong> or</p>
<p><strong>--no-cow</strong>.</p>
<h2>Console settings</h2>
<dl>
<dt><strong>--con0=<em>MODE</em></strong></dt>
<dd>
</dd>
<dt><strong>--con1=<em>MODE</em></strong></dt>
<dd><p>Each virtual machine can have at most two console windows, which correspond to the virtual terminals (ttys) of the real host. <strong>con0</strong> is the primary console, and <strong>con1</strong> is an optional, secondary console. Depending on the value of <em>MODE</em>, each console can be configured to be attached to different terminal emulator programs or devices. <em>MODE</em> can be one of the following:</p>
<dl>
<dt><strong>xterm</strong></dt>
<dd><p>Attach console to a terminal emulator application (the application must be correctly installed).</p>
</dd>
<dt><strong>this</strong></dt>
<dd><p>Attach console to stdin/stdout (i.e., use the current terminal); <strong>this</strong> mode cannot be used for both the primary and the secondary console at the same time.</p>
</dd>
<dt><strong>pty</strong></dt>
<dd><p>Attach console to a pseudo-terminal. You can later reach it by connecting a terminal emulator to the corresponding tty (for example, 'screen /dev/ttyp0').</p>
</dd>
<dt><strong>port:<em>tcp-port</em></strong></dt>
<dd><p>Attach console to TCP port <em>tcp-port</em>. This console can then be accessed by telnetting to that port. The virtual machine will not be actually started until the first connection is established. Notice that, if the connection is closed while the virtual machine is still running, it won't be possible to access the console by telnetting again to <em>tcp-port</em>. In such a case, the virtual machine can still be halted by using one of the commands <strong>vhalt</strong> or <strong>vcrash</strong>.</p>
</dd>
<dt><strong>none</strong></dt>
<dd><p>Disable console (primary console cannot be disabled).</p>
</dd>
</dl>
<p>Default console settings (including the default terminal emulator application to be used) are stored inside the <em>netkit.conf</em> configuration file (see <strong>netkit.conf</strong>(5)).</p>
<p>Using the <strong>--con0</strong>=<strong>this</strong> option also implies <strong>--foreground</strong>.</p>
</dd>
</dl>
<dl>
<dt><strong>--xterm=<em>TYPE</em></strong></dt>
<dd><p>Consoles enabled in <strong>xterm</strong> <em>MODE</em> can make use of different terminal emulator applications. In particular, <em>TYPE</em> can assume one of the following values:</p>
<dl>
<dt><strong>gnome</strong></dt>
<dd><p>use the Gnome Desktop gnome-terminal.</p>
</dd>
<dt><strong>konsole</strong></dt>
<dd><p>use the KDE Desktop Environment konsole.</p>
</dd>
<dt><strong>konsole-tab</strong></dt>
<dd><p>same as <strong>konsole</strong>, except different virtual machines are opened in different tabs of the same konsole window.</p>
</dd>
<dt><strong>xterm</strong></dt>
<dd><p>use the standard xterm.</p>
</dd>
</dl>
<p>When attaching a console to a terminal emulator, make sure that the corresponding application is properly installed.<br />
The default terminal emulator application to be used is configured inside the <em>netkit.conf</em> file (see <strong>netkit.conf</strong>(5)).</p>
</dd>
</dl>
<h2>Laboratory settings</h2>
<p>The following options can be used when setting up virtual laboratories. In general, it is unlikely that you need to directly use them. Instead, laboratories should be set up by using the <strong>lstart</strong> command (see <strong>lstart</strong>(1)).</p>
<dl>
<dt><strong>-e <em>COMMAND</em></strong></dt>
<dd>
</dd>
<dt><strong>--exec=<em>COMMAND</em></strong></dt>
<dd><p>Run a specific command inside the virtual machine during the boot phase. <em>COMMAND</em> should be the name of an executable command or script.</p>
</dd>
<dt><strong>-l <em>DIRECTORY</em></strong></dt>
<dd>
</dd>
<dt><strong>--hostlab=<em>DIRECTORY</em></strong></dt>
<dd><p>Tell the virtual machine that the base directory for the laboratory is <em>DIRECTORY</em>. <em>DIRECTORY</em> is a directory on the host machine which contains information about the configuration of the laboratory.</p>
</dd>
<dt><strong>-w <em>DIRECTORY</em></strong></dt>
<dd>
</dd>
<dt><strong>--hostwd=<em>DIRECTORY</em></strong></dt>
<dd><p>Set the lab working directory to <em>DIRECTORY</em>. <em>DIRECTORY</em> is a directory on the host machine which is used to store some temporary files (e.g., files that indicate that a virtual machine has completed the boot process).</p>
</dd>
</dl>
<p><strong>Notice</strong>: options <strong>-l</strong>,</p>
<p><strong>--hostlab</strong>,</p>
<p><strong>-w</strong>, and</p>
<p><strong>--hostwd</strong></p>
<p>make the host filesystem accessible inside the virtual machine even if the option <strong>-H</strong> or</p>
<p><strong>--no-hosthome</strong></p>
<p>is being used. In particular, <em>DIRECTORY</em> is made available for reading/writing under the '/hostlab' or '/hostwd' directory in the virtual machine (depending on the option being used).</p>
<h2>Other options</h2>
<dl>
<dt><strong>--append=<em>PARAMETER</em></strong></dt>
<dd><p>Append additional kernel command line parameters when running the virtual machine kernel. <em>PARAMETER</em> can be the name of a kernel option (e.g., ''quiet'') or a pair <em>PARAMETER</em>=<em>VALUE</em>. Documentation about supported parameters can be found inside the kernel source tree (which you can download at http://www.kernel.org).</p>
</dd>
</dl>
<p>This option can be used multiple times, so that several parameters can be appended. Parameters will be passed to the kernel in the same order in which they are provided.</p>
<dl>
<dt><strong>-F</strong></dt>
<dd>
</dd>
<dt><strong>--foreground</strong></dt>
<dd><p>By default, virtual machines are started in background. By using this option, <em>vstart</em> waits for the virtual machine to halt (or crash) before giving the command line prompt back. Virtual machines are also started in foreground when using the <strong>--con0</strong>=<strong>this</strong> or <strong>--con1</strong>=<strong>this</strong> option.</p>
</dd>
</dl>
<p>Regardless of this option, virtual hubs are always started in background.</p>
<dl>
<dt><strong>--tmux-attached</strong></dt>
<dd><p>Run each VM in a tmux session and start a terminal attached to this tmux session. This is the same as setting USE_TMUX=TRUE and TMUX_OPEN_TERMS=TRUE in netkit.conf</p>
</dd>
</dl>
<dl>
<dt><strong>--tmux-detached</strong></dt>
<dd><p>Run each VM in a tmux session without opening any terminals. This is the same as setting USE_TMUX=TRUE and TMUX_OPEN_TERMS=FALSE in netkit.conf</p>
</dd>
<dt><strong>-h</strong></dt>
<dd>
</dd>
<dt><strong>--help</strong></dt>
<dd><p>Show usage information. This option also prints out the default values for several settings (i.e., those that have been configured inside <em>netkit.conf</em> — see <strong>netkit.conf</strong>(5)).</p>
</dd>
<dt><strong>-p</strong></dt>
<dd>
</dd>
<dt><strong>--print</strong></dt>
<dd><p>Instead of actually starting the virtual machine, just show which commands would be executed, including those used to start virtual hubs.</p>
</dd>
<dt><strong>-q</strong></dt>
<dd>
</dd>
<dt><strong>--quiet</strong></dt>
<dd><p>Suppress any output except errors and warnings.</p>
</dd>
<dt><strong>-v</strong></dt>
<dd>
</dd>
<dt><strong>--verbose</strong></dt>
<dd><p>This option enables verbose kernel messages during the virtual machine boot phase.</p>
</dd>
<dt><strong>--version</strong></dt>
<dd><p>Print information about the installed Netkit release and the host kernel version and exit. If ''<em>&lt;unavailable&gt;</em>'' is printed instead of a version number, then the corresponding information could not be retrieved (for example because a non-standard Netkit kernel or filesystem is being used).</p>
</dd>
</dl>
<h1>ENVIRONMENT VARIABLES</h1>
<p>All Netkit commands require that the <strong>NETKIT_HOME</strong> variable contains the name of the directory Netkit is installed in.</p>
<p>Default settings for newly started virtual machines can be overridden if the following environment variables are defined:</p>
<dl>
<dt><strong>NETKIT_FILESYSTEM</strong></dt>
<dd><p>Name of the default model filesystem (must be the name of a file storing the whole model filesystem). Can be changed by using the <strong>-m</strong> or <strong>--model-fs</strong> option.</p>
</dd>
<dt><strong>NETKIT_MEMORY</strong></dt>
<dd><p>Amount of available RAM inside the virtual machine (in megabytes). Can be changed by using the <strong>-M</strong> or <strong>--mem</strong> option.</p>
</dd>
<dt><strong>NETKIT_KERNEL</strong></dt>
<dd><p>Name of the virtual machine kernel (must be the name of a UML kernel). Can be changed by using the <strong>-k</strong> or <strong>--kernel</strong> option.</p>
</dd>
<dt><strong>NETKIT_CON0</strong></dt>
<dd><p>Console mode for the primary console. Can be changed by using the <strong>--con0</strong> option (see above the documentation of this option for a list of permitted values).</p>
</dd>
<dt><strong>NETKIT_CON1</strong></dt>
<dd><p>Console mode for the secondary console. Can be changed by using the <strong>--con1</strong> option (see above the documentation of this option for a list of permitted values).</p>
</dd>
<dt><strong>NETKIT_TERM</strong></dt>
<dd><p>Terminal emulator program to be used for consoles in <strong>xterm</strong> mode. Can be changed by using the <strong>--xterm</strong> option (see above the documentation of this option for a list of permitted values).</p>
</dd>
</dl>
<h1>FILES</h1>
<dl>
<dt><em>MACHINE-NAME.disk</em></dt>
<dd><p>This is the default <em>COW</em> filesystem used by virtual machines. This file is automatically created in the current directory as soon as virtual machine <em>MACHINE-NAME</em> is started, if it does not exist yet. It stores all the differences between the model filesystem and the current filesystem contents.</p>
</dd>
<dt><em>$NETKIT_HOME/netkit.conf</em></dt>
<dd>
</dd>
<dt><em>/etc/netkit.conf</em></dt>
<dd>
</dd>
<dt><em>~/.netkit/netkit.conf</em></dt>
<dd><p>These files store global defaults for newly started virtual machines. They are considered in the order in which they are listed, so that users can override system wide settings. For more information about the contents of this file, see <strong>netkit.conf</strong>(5).</p>
</dd>
<dt><em>~/.netkit/hubs/</em></dt>
<dd><p>This directory stores temporary socket files that are needed for the virtual hubs to work properly. These files are automatically removed when unused. A different directory may also be configured inside the <em>netkit.conf</em> file (see <strong>netkit.conf</strong>(5)).</p>
</dd>
<dt><em>~/.netkit/mconsole/</em></dt>
<dd><p>This directory stores temporary socket files that are used to send special directives to the virtual machines (e.g., halting commands). These files are automatically removed when the corresponding virtual machine is halted or crashed. A different directory may also be configured inside the <em>netkit.conf</em> file (see <strong>netkit.conf</strong>(5)).</p>
</dd>
</dl>
<h1>EXAMPLES</h1>
<pre><code>vstart pc1</code></pre>
<p>Start a new virtual machine named <strong>pc1</strong>. The 'pc1.disk' file is also created in the current directory.</p>
<pre><code>vstart mypc1 -k /home/foo/kernel/uml-kernel -M 128 -m /home/foo/filesystems/model-fs</code></pre>
<p>Start a new virtual machine named <strong>mypc1</strong>. The machine will run using kernel</p>
<p>'<strong>/home/foo/kernel/uml-kernel</strong>',</p>
<p>will be equipped with <strong>128</strong> MB of RAM and its filesystem contents upon first boot will be those of the model file</p>
<p>'<strong>/home/foo/filesystems/model-fs</strong>'.</p>
<pre><code>vstart producer --eth0=A</code></pre>
<pre><code>vstart consumer --eth0=A</code></pre>
<p>Start two virtual machines named <strong>producer</strong> and <strong>consumer</strong>, which will be able to exchange data with each other by using their network interfaces <strong>eth0</strong>. Such interfaces will have to be configured with an IP address before the communication can actually take place.</p>
<pre><code>vstart router --eth0=tap,10.0.0.1,10.0.0.2 --eth1=A</code></pre>
<p>Start a new virtual machine named <strong>router</strong>. The machine will have two network interfaces. Interface <strong>eth0</strong> will be automatically configured to have IP address <strong>10.0.0.2</strong> when the virtual machine is started. It will be connected to the real network, and will have host side IP address <strong>10.0.0.1</strong>. Interface <strong>eth1</strong> will be attached to the virtual collision domain (i.e., hub) named <strong>A</strong> and will have to be configured by hand inside the virtual machine (for example, by using <strong>ifconfig</strong>).</p>
<pre><code>vstart test --eth0=A --eth1=B -f /home/foo/myFilesystem -p</code></pre>
<p>Instead of actually starting a virtual machine, show which commands would be executed for running one named <strong>test</strong>, with two network interfaces attached to collision domains <strong>A</strong> and <strong>B</strong> and using filesystem</p>
<p>'<strong>/home/foo/myFilesystem</strong>'.</p>
<pre><code>vstart conTest --con0=xterm --con1=xterm --xterm=konsole-tab</code></pre>
<p>Start a virtual machine named <strong>conTest</strong> having two consoles. They will be shown inside different tabs of the terminal emulator konsole.</p>
<h1>SEE ALSO</h1>
<p><em>lstart</em>(1), <em>netkit.conf</em>(5), <em>vclean</em>(1), <em>vconf</em>(1), <em>vcrash</em>(1), <em>vhalt</em>(1), <em>vlist</em>(1), Netkit filesystem README.</p>
<h1>AUTHOR</h1>
<p><em>vstart</em> script: Massimo Rimondini<br />
This man page: Massimo Rimondini, Fabio Ricci</p>
<h1>REPORTING BUGS</h1>
<p>Report bugs to the Github issues page: https://github.com/netkit-jh/netkit-jh-build/issues</p>
<p>Please follow the recommended templates when reporting bugs.</p>
`

const html = ReactHtmlParser(raw);
export default html;

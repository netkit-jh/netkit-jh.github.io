import ReactHtmlParser from 'react-html-parser';

const raw = `
<h1>NAME</h1>
<p>vlist - show information about running netkit virtual machines</p>
<h1>SYNOPSIS</h1>
<p><strong>vlist</strong> [options] [<em>MACHINE-ID</em>...]</p>
<h1>DESCRIPTION</h1>
<p>The <em>vlist</em> command shows several information about currently running virtual machines. If no arguments are provided, it shows a list of virtual machines that have been started by the current user. The list entries have the following format: <strong>USER</strong>, <strong>VHOST</strong>, <strong>PID</strong>, <strong>SIZE</strong>, <strong>INTERFACES</strong>, where:</p>
<blockquote>
<dl>
<dt><strong>USER</strong></dt>
<dd><p>is the name of the user who started the virtual machine (virtual machine owner).</p>
</dd>
<dt><strong>VHOST</strong></dt>
<dd><p>is the name of the virtual machine.</p>
</dd>
<dt><strong>PID</strong></dt>
<dd><p>is the PID of the virtual machine.</p>
</dd>
<dt><strong>SIZE</strong></dt>
<dd><p>is the actual amount of memory consumed by the virtual machine, in KB.</p>
</dd>
<dt><strong>INTERFACES</strong></dt>
<dd><p>is a (possibly empty) list of the network interfaces of the virtual machine, together with the virtual collision domains (hubs) they are attached to.</p>
</dd>
</dl>
</blockquote>
<p>At the bottom of the list the following summary information are shown:</p>
<dl>
<dt>–</dt>
<dd><p>the number of running virtual machines belonging to the current user and to all users;</p>
</dd>
<dt>–</dt>
<dd><p>the amount of memory consumed by running virtual machines owned by the current user and by all users.</p>
</dd>
</dl>
<p>The <em>vlist</em> command can also be used to get detailed information about specific virtual machines. In this case the virtual machines list is not shown. You can select virtual machines for which you want to get such information by providing one or more <em>MACHINE-ID</em>s on the command line. A <em>MACHINE-ID</em> can be either the name or the PID of a virtual machine. Detailed information consist of the following data:</p>
<p><strong>Accounting information</strong></p>
<blockquote>
<dl>
<dt><strong>PID</strong></dt>
<dd><p>virtual machine PID.</p>
</dd>
</dl>
<dl>
<dt><strong>Owner</strong></dt>
<dd><p>name of the user who started the virtual machine.</p>
</dd>
</dl>
<dl>
<dt><strong>Used mem</strong></dt>
<dd><p>amount of memory consumed by the virtual machine.</p>
</dd>
</dl>
</blockquote>
<p><strong>Emulation parameters</strong></p>
<blockquote>
<dl>
<dt><strong>Kernel</strong></dt>
<dd><p>name of the UML kernel used by the virtual machine.</p>
</dd>
</dl>
<dl>
<dt><strong>Memory</strong></dt>
<dd><p>amount of available memory inside the virtual machine.</p>
</dd>
</dl>
<dl>
<dt><strong>Model fs</strong></dt>
<dd><p>name of the model (backing) filesystem used by the virtual machine.</p>
</dd>
</dl>
<dl>
<dt><strong>Filesystem</strong></dt>
<dd><p>name of the (COW) filesystem used by the virtual machine.</p>
</dd>
</dl>
<dl>
<dt><strong>Interfaces</strong></dt>
<dd><p>list of network interfaces of the virtual machine, and the collision domains they are attached to.</p>
</dd>
</dl>
<dl>
<dt><strong>Hostfs at</strong></dt>
<dd><p>directory of the host filesystem that is made available inside the virtual machine under '/hosthome'.</p>
</dd>
</dl>
<dl>
<dt><strong>Boot cmd</strong></dt>
<dd><p>name of a command (or a script) that has been executed by the virtual machine during the boot phase.</p>
</dd>
</dl>
<dl>
<dt><strong>Hostlab at</strong></dt>
<dd><p>directory of the host filesystem that is made available in the virtual machine under '/hostlab'. This directory stores information about the configuration of a laboratory.</p>
</dd>
</dl>
<dl>
<dt><strong>Host WD at</strong></dt>
<dd><p>directory of the host filesystem that is made available in the virtual machine under '/hostwd'. This directory stores some temporary files for a laboratory.</p>
</dd>
</dl>
<dl>
<dt><strong>Console 1, <strong>Console 2</strong></strong></dt>
<dd><p>devices to which the primary and secondary consoles of the virtual machine are attached.</p>
</dd>
</dl>
<dl>
<dt><strong>Other args</strong></dt>
<dd><p>additional parameters or arguments that have been appended to the virtual machine kernel command line.</p>
</dd>
</dl>
<dl>
<dt><strong>Mconsole</strong></dt>
<dd><p>name of the temporary socket file that will be used to send directives to the virtual machine (e.g., to halt the virtual machine).</p>
</dd>
</dl>
</blockquote>
<p>Depending on the configuration of the virtual machine, some of the above entries may not be shown. For example, for a virtual machine without network interfaces, the <strong>Interfaces</strong> entry is not shown.</p>
<h1>OPTIONS</h1>
<p>The following options can be used to influence the output of <em>vlist</em>.</p>
<dl>
<dt><strong>-n</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--no-header</strong></dt>
<dd><p>Suppress both header line and summary information in the list of virtual machines. This option has no effect if you requested detailed information about specific virtual machines.</p>
</dd>
<dt><strong>-u <em>USERNAME</em></strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--user=<em>USERNAME</em></strong></dt>
<dd><p>Only show virtual machines owned by <em>USERNAME</em>. The special user name '<strong>-</strong>' is reserved and can be used to show virtual machines owned by all users.<br />
By default, only virtual machines started by the current user (i.e., the one who launched the <em>vlist</em> command) are shown.</p>
</dd>
</dl>
<p>This option also limits virtual machines for which detailed information can be requested. By providing a <em>USERNAME</em>, you can only ask information about virtual machines owned by <em>USERNAME</em>.</p>
<p>Consider that different users may start virtual machines having the same name. Hence, special care must be taken when <em>USERNAME</em> is '<strong>-</strong>' and you are requesting detailed information about a virtual machine by providing its name. In this case, information about only one virtual machine are reported, even if several virtual machines with the same name exist. In particular, <em>vlist</em> considers the first machine with a matching name in the list returned by 'vlist --user=-'.</p>
<p>The following generic options are also supported.</p>
<dl>
<dt><strong>-h</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--help</strong></dt>
<dd><p>Show usage information.</p>
</dd>
<dt><strong>--version</strong></dt>
<dd><p>Print information about the installed Netkit release and the host kernel version and exit. If ''<em>&lt;unavailable&gt;</em>'' is printed instead of a version number, then the corresponding information could not be retrieved (for example because a non-standard Netkit kernel or filesystem is being used).</p>
</dd>
</dl>
<h1>ENVIRONMENT VARIABLES</h1>
<p>All Netkit commands require that the <strong>NETKIT_HOME</strong> variable contains the name of the directory Netkit is installed in.</p>
<p>Apart from this, <em>vlist</em> supports no other environment variables.</p>
<h1>EXAMPLES</h1>
<p>The following is an example of the output of <em>vlist</em> when launched with no arguments.</p>
<blockquote>
<pre><code>USER             VHOST               PID       SIZE  INTERFACES
foo              pc1                 300      12684
foo              pc2                1126      69720  eth0 @ A, eth1 @ B

Total virtual machines:       2    (you),        2    (all users).
Total consumed memory:    82404 KB (you),    82404 KB (all users).</code></pre>
</blockquote>
<p>The following example shows detailed information about a specific virtual machine, which you can get by typing 'vlist pc1'.</p>
<blockquote>
<pre><code>============= Information for virtual machine &quot;pc1&quot; =============
 --- Accounting information ---
   PID:        300
   Owner:      foo
   Used mem:   12684 KB
 --- Emulation parameters ---
   Kernel:     /home/foo/netkit/kernel/netkit-kernel
   Modules:    /home/foo/netkit/kernel/modules
   Memory:     8 MB
   Model fs:   /home/foo/netkit/fs/netkit-fs
   Filesystem: /home/foo/pc1.disk
   Hostfs at:  /home/foo
   Console 1:  terminal emulator
   Console 2:  disabled
   Other args: umid=pc1 root=98:1 uml_dir=/home/foo/.netkit/mconsole quiet
   Mconsole:   /home/foo/.netkit/mconsole/pc1/mconsole</code></pre>
</blockquote>
<h1>SEE ALSO</h1>
<p><em>vclean</em>(1), <em>vconf</em>(1), <em>vcrash</em>(1), <em>vhalt</em>(1), <em>vstart</em>(1).</p>
<h1>AUTHOR</h1>
<p><em>vlist</em> script: Massimo Rimondini<br />
This man page: Massimo Rimondini, Fabio Ricci</p>
<h1>REPORTING BUGS</h1>
<p>Report bugs to the Github issues page: https://github.com/netkit-jh/netkit-jh-build/issues</p>
<p>Please follow the recommended templates when reporting bugs.</p>
`

const html = ReactHtmlParser(raw);
export default html;

import ReactHtmlParser from 'react-html-parser';

const raw = `
<h1>NAME</h1>
<p>vclean - cleanup netkit processes and configurations</p>
<h1>SYNOPSIS</h1>
<p><strong>vclean</strong> [options]</p>
<h1>DESCRIPTION</h1>
<p>The <em>vclean</em> command can be used to perform some cleanup operations on the host machine. In order to run virtual machines, Netkit launches several processes and sometimes performs some configuration changes (e.g., when setting up ''<strong>tap</strong>'' collision domains – see <strong>vstart</strong>(1) –). After stopping all the virtual machines the system is reverted to its original state. Nevertheless, sometimes it may be useful (or even necessary) to force a cleanup which stops hanging processes and removes any configuration change. In this sense, <em>vclean</em> can be considered as the Netkit ''panic button''.</p>
<p>The use of <em>vclean</em> becomes necessary in (at least) the following situations:</p>
<dl>
<dt>–</dt>
<dd><p>A network interface has been connected to a ''<strong>tap</strong>'' collision domain. After halting (or crashing) some virtual machines, the ''<strong>tap</strong>'' collision domain is not used any more and the corresponding configuration settings must be removed (see <strong>vstart</strong>(1) for a description of ''<strong>tap</strong>'' collision domains).</p>
</dd>
<dt>–</dt>
<dd><p>A network interface has been attached ''on the fly'' to a running virtual machine by using <strong>vconf</strong> (see <strong>vconf</strong>(1)). After halting (or crashing) the machine, the corresponding virtual hub is still running and must be terminated.</p>
</dd>
</dl>
<p><em>vclean</em> can perform several cleanup operations. If invoked without options, it just scans for virtual hubs launched by the current user that are still running but no longer used (i.e., there is no virtual machine that is connected to them). If any of the options listed below is provided, then only the requested action is performed. It is also possible to perform several actions in a single run.</p>
<dl>
<dt><strong>--clean-all</strong></dt>
<dd><p>This option tells <em>vclean</em> to perform all the cleanup operations listed below. It is a shortcut for <strong>-HKT</strong>.<br />
Please <strong>use this option with care</strong>: depending on the other command line switches you are using, this <strong>may kill virtual machines started by any user</strong>!</p>
</dd>
<dt><strong>-H</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--remove-hubs</strong></dt>
<dd><p>Terminate running virtual hubs (collision domains) that are not used any more (i.e., those that have no virtual machines attached). This is the default action when <em>vclean</em> is invoked without options.</p>
</dd>
<dt><strong>-K</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--kill-machines</strong></dt>
<dd><p>Terminate all running virtual machines and virtual hubs. Virtual machines are killed in the same way as the ''vcrash -k'' command would do (see <strong>vcrash</strong>(1)).<br />
This is probably the most effective ''panic button''. In fact, using this option should result in getting rid of all Netkit processes, even the hanging ones (unless they are hanging so hard that only a reboot can destroy them).</p>
</dd>
<dt><strong>-T</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--remove-tunnels</strong></dt>
<dd><p>When using an interface attached to a ''<strong>tap</strong>'' collision domain for the first time, <em>vstart</em> (or <em>vconf</em>, depending on the command you have been using to configure the interface – see <strong>vstart</strong>(1), <strong>vconf</strong>(1)) takes care of automatically configuring the necessary host-side settings and, if found, also the iptables firewall. For details about the configuration parameters being altered, see <strong>vstart</strong>(1).</p>
</dd>
</dl>
<p>This option removes any host-side configurations and restores the previous firewall settings. More precisely, the following operations are performed:</p>
<p>1) If the iptables firewall is found, then both masquerading and packet forwarding for data passing through tap interfaces are disabled. In particular, the following rules are removed:</p>
<pre><code>*nat
-A POSTROUTING -j MASQUERADE
*filter
-A FORWARD -i nk_tap_+ -j ACCEPT</code></pre>
<p><br />
2) Kernel IP forwarding is disabled by echoing '0' to the special file</p>
<p>'/proc/sys/net/ipv4/ip_forward'.</p>
<p><br />
3) Every tap interface (on the host side) is brought down and the corresponding tap device is removed.<br />
4) Permissions for the '/dev/net/tun' device are set to 660 (read/write for its owner and for other users in the same group; no permissions for other users).</p>
<p>These operations require administrative privileges. The <em>vclean</em> command will take care of asking you for a password if needed. For more information about how Netkit gains root privileges, see <strong>USE_SUDO</strong> and <strong>SETTING UP NETKIT FOR USE WITH SUDO</strong> in the man page of <strong>netkit.conf</strong>(5).</p>
<p><strong>Notice</strong>: this action is in no way influenced by the <strong>--user</strong> option. Using <strong>--remove-tunnels</strong> or <strong>-T</strong> causes all host-side configurations to be removed, regardless of the user who had requested them.</p>
<dl>
<dt><strong>--test</strong></dt>
<dd><p>Instead of terminating virtual hubs and/or virtual machines, just show which processes would be killed. This option cannot be used together with <strong>-q</strong> (<strong>--quick</strong>, <strong>--quiet</strong>). Action <strong>--remove-tunnels</strong> is not affected by the use of <strong>--test</strong>.</p>
</dd>
<dt><strong>-u <em>USERNAME</em></strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--user=<em>USERNAME</em></strong></dt>
<dd><p>This options limits the scope of the above actions to virtual machines and hubs owned by user <em>USERNAME</em>. By default, <em>vclean</em> only terminates machines and hubs owned by the current user (i.e., the one who launched <em>vclean</em>). The special user name '<strong>-</strong>' is reserved, and can be used to perform cleanup actions on every machine and hub, regardless of the user who started it. Please <strong>use the '--user=-' or '-u -' option with extreme care</strong>: depending on the options you are using, this <strong>may crash ALL virtual machines that are currently</strong> running on the host machine.</p>
</dd>
</dl>
<p>Action <strong>--remove-tunnels</strong> is not affected by this option.</p>
<p>Other supported options are:</p>
<dl>
<dt><strong>-h</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--help</strong></dt>
<dd><p>Show usage information.</p>
</dd>
<dt><strong>-q</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--quick</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--quiet</strong></dt>
<dd><p>By default, after killing processes <em>vclean</em> checks whether they have actually stopped. This option disables these checks, thus quickening the execution of <em>vclean</em>. It also suppresses any output, except errors and warnings.</p>
</dd>
</dl>
<p>This option cannot be used in conjunction with <strong>--test</strong>.</p>
<dl>
<dt><strong>--version</strong></dt>
<dd><p>Print information about the installed Netkit release and the host kernel version and exit. If ''<em>&lt;unavailable&gt;</em>'' is printed instead of a version number, then the corresponding information could not be retrieved (for example because a non-standard Netkit kernel or filesystem is being used).</p>
</dd>
</dl>
<h1>ENVIRONMENT VARIABLES</h1>
<p>All Netkit commands require that the <strong>NETKIT_HOME</strong> variable contains the name of the directory Netkit is installed in.</p>
<p>Apart from this, <em>vclean</em> supports no other environment variables.</p>
<h1>NOTES</h1>
<p><em>vclean</em> has nothing to do with <strong>lclean</strong>(1). While the former works as a vacuum cleaner for unused and/or hanging Netkit processes, the latter is a tool to clean up directories containing Netkit labs. In particular, <em>vclean</em> works on processes (which have not necessarily been originated in a Netkit lab) and, optionally, on the system configuration (to remove tunnels and firewall settings), while <strong>lclean</strong>(1) works on the host filesystem (with the purpose of cleaning up temporary files created after running a Netkit lab).</p>
<h1>SEE ALSO</h1>
<p><em>lclean</em>(1), <em>vconf</em>(1), <em>vcrash</em>(1), <em>vhalt</em>(1), <em>vlist</em>(1), <em>vstart</em>(1).</p>
<h1>AUTHOR</h1>
<p><strong>vclean</strong> script: Massimo Rimondini<br />
This man page: Massimo Rimondini</p>
`

const html = ReactHtmlParser(raw);
export default html;

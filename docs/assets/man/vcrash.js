import ReactHtmlParser from 'react-html-parser';

const raw = `
<h1>NAME</h1>
<p>vcrash - crash a running netkit virtual machine</p>
<h1>SYNOPSIS</h1>
<p><strong>vcrash</strong> [options] <em>MACHINE-ID</em>...</p>
<h1>DESCRIPTION</h1>
<p>The <em>vcrash</em> command can be used to forcedly halt running virtual machines. It allows both to stop machines immediately (i.e., without having to go through their shutdown sequence) and to kill frozen machines. <em>MACHINE-ID</em> can be either the PID or the name of a virtual machine.</p>
<p>This command is quite similar to <em>vhalt</em> (see <strong>vhalt</strong>(1)), except that it is faster and its effect is comparable to that of unplugging the virtual machine power cord (as opposed to gracefully shutdown it). This also implies that crashed virtual machines will perform a file system integrity check upon their next boot.</p>
<p>The following options can be used to influence the way <em>vcrash</em> behaves.</p>
<dl>
<dt><strong>-k</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--kill</strong></dt>
<dd><p>By default, virtual machines are crashed by sending them a special directive through their management console (mconsole) socket. Such method is generally faster, but in some situations it may not work properly (for example, if a virtual machine is somewhy frozen). If an attempt to crash a virtual machine via the mconsole fails, <em>vcrash</em> automatically tries hard to kill the virtual machine processes.<br />
By using this option, the attempt with the mconsole socket is simply skipped, and <em>vcrash</em> directly kills virtual machine processes. This should work in most cases. If still it does not, try using <em>vclean</em> (see <strong>vclean</strong>(1)).</p>
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
<dd><p>After crashing virtual machines, <em>vcrash</em> waits a few instants to check whether they have actually stopped. By using the <strong>-q</strong> (<strong>--quick</strong>, <strong>--quiet</strong>) option, <em>vcrash</em> exits immediately, without waiting for the machine to stop. This option also suppresses any kind of output except errors and warnings.<br />
Notice that, when a virtual machine is crashed via its mconsole socket (default if the <strong>-k</strong> option is not used), <em>vcrash</em> still waits for the crash directive to reach the virtual machine before returning, even when using the <strong>-q</strong> option. The reason why this is necessary is simple: if somehy the directive does not reach the virtual machine within a predefined timeout, <em>vcrash</em> takes care of quitting the mconsole helper tool before exiting, thus getting rid of unuseful hanging processes. </p>
</dd>
<dt><strong>-r</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--remove-fs</strong></dt>
<dd><p>Delete virtual machine (COW) filesystem after halting machine. This option does not affect in any way the model filesystem. In particular, using this option has no effect on machines started with the <strong>--no-cow</strong> or <strong>-W</strong> option. See the README in the Netkit filesystem package for more information about COW and model filesystems.</p>
</dd>
<dt><strong>--test</strong></dt>
<dd><p>Instead of actually crashing virtual machines, just show what would be done (i.e., which processes would be killed or which socket would be used to send the crash directive). This option cannot be used in conjunction with <strong>-q</strong> (or <strong>--quick</strong>, <strong>--quiet</strong>).</p>
</dd>
<dt><strong>-u <em>USERNAME</em></strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--user=<em>USERNAME</em></strong></dt>
<dd><p>This option limits the range of action of <em>vcrash</em> to machines owned by user <em>USERNAME</em> (i.e., only <em>USERNAME</em>'s machines can be killed). This is useful, for example, if you need to crash someone else's machines (which requires administrative privileges). By default, <em>vcrash</em> only operates on virtual machines owned by the current user (the one who issued the <em>vcrash</em> command). The special user name '<strong>-</strong>' is reserved, and can be used to crash machines regardless of their owner.</p>
</dd>
</dl>
<p>Consider that different users may be running virtual machines having the same name. Hence, special care must be taken when using the '<strong>--user=-</strong>' option and one or more <em>MACHINE-ID</em>s are virtual machine names. In this case, if two (or more) users are running virtual machines having the same <em>name</em>, then only the one returned by</p>
<p>'vlist --user=- <em>name</em>'</p>
<p>is halted.</p>
<p><em>vcrash</em> also supports the following options:</p>
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
<p>Apart from this, <em>vcrash</em> supports no other environment variables.</p>
<h1>BACKWARD COMPATIBILITY</h1>
<p>The following options are deprecated and you are encouraged not to use them. They are only provided to ensure backward compatibility with older versions of Netkit.</p>
<dl>
<dt><strong>--force</strong></dt>
<dd><p>This option can be used to crash a virtual machine for which both the PID and the name are known. When using <strong>--force</strong>, <em>vcrash</em> switches to an alternative syntax. In particular, it takes exactly two arguments: the virtual machine PID and its name. Option <strong>-r</strong> or <strong>--remove-fs</strong> does not work when using <strong>--force</strong>.</p>
</dd>
</dl>
<p>This option had been introduced (but was undocumented) in older versions of <em>vcrash</em> with the purpose of speeding up the process of halting laboratories. With the current version of <em>vcrash</em> there isn't any reason to use it (not even for speeding up the crash).</p>
<dl>
<dt><strong>--root</strong></dt>
<dd><p>A synonym for <strong>--user</strong>=<strong>-</strong>.</p>
</dd>
</dl>
<h1>SEE ALSO</h1>
<p><em>vclean</em>(1), <em>vconf</em>(1), <em>vhalt</em>(1), <em>vlist</em>(1), <em>vstart</em>(1), Netkit filesystem README.</p>
<h1>AUTHOR</h1>
<p><em>vcrash</em> script: Massimo Rimondini<br />
This man page: Massimo Rimondini, Fabio Ricci</p>
<h1>REPORTING BUGS</h1>
<p>Report bugs to the Github issues page: https://github.com/netkit-jh/netkit-jh-build/issues</p>
<p>Please follow the recommended templates when reporting bugs.</p>
`

const html = ReactHtmlParser(raw);
export default html;

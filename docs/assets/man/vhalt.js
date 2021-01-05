import ReactHtmlParser from 'react-html-parser';

const raw = `
<h1>NAME</h1>
<p>vhalt - shutdown a running netkit virtual machine</p>
<h1>SYNOPSIS</h1>
<p><strong>vhalt</strong> [options] <em>MACHINE-ID</em>...</p>
<h1>DESCRIPTION</h1>
<p>The <em>vhalt</em> command can be used to gracefully shutdown running virtual machines. Using <em>vhalt</em> has exactly the same effect as issuing the 'halt' command inside the virtual machine.</p>
<p><em>MACHINE-ID</em> is either the name or the PID of a virtual machine.</p>
<p>This command supports the following options.</p>
<dl>
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
<dd><p>The default behaviour is to wait a few seconds in order to check whether the virtual machine has actually shut down. By using this option, <em>vhalt</em> issues the shutdown command and exits immediately, without waiting for termination of the virtual machine. This option also suppresses any output, except errors and warnings.</p>
</dd>
</dl>
<p>This is useful, for example, to embed invocations of <em>vhalt</em> inside scripts.</p>
<dl>
<dt><strong>-r</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--remove-fs</strong></dt>
<dd><p>Delete virtual machine (COW) filesystem after halting machine. This option does not affect in any way the model filesystem. In particular, using this option has no effect on machines started with the <strong>--no-cow</strong> or <strong>-W</strong> option. See the README in the Netkit filesystem package for more information about COW and model filesystems.</p>
</dd>
<dt><strong>-u <em>USERNAME</em></strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--user=<em>USERNAME</em></strong></dt>
<dd><p>Restrict the <em>vhalt</em> range of action to virtual machines owned by <em>USERNAME</em>. By using this option, only machines started by <em>USERNAME</em> can be halted. This option is useful, for example, if you want to halt someone else's machines (this requires administrative privileges). By default <em>vhalt</em> only considers virtual machines owned by the current user (the one who launched the <em>vhalt</em> command). The special <em>USERNAME</em> '<strong>-</strong>' is reserved and can be used to kill virtual machines regardless of their owner.</p>
</dd>
</dl>
<p>Special care must be taken if you choose to pass virtual machine names to <em>vhalt</em> and the '<strong>--user</strong>=<strong>-</strong>' option is being used. If two (or more) different users are running virtual machines having the same <em>name</em>, then only the one returned by</p>
<p>'vlist --user=- <em>name</em>'</p>
<p>is halted.</p>
<p>Other available options are:</p>
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
<p>Apart from this, <em>vhalt</em> supports no other environment variables.</p>
<h1>SEE ALSO</h1>
<p><em>vclean</em>(1), <em>vconf</em>(1), <em>vcrash</em>(1), <em>vlist</em>(1), <em>vstart</em>(1), Netkit filesystem README.</p>
<h1>AUTHOR</h1>
<p><em>vhalt</em> script: Massimo Rimondini<br />
This man page: Massimo Rimondini, Fabio Ricci</p>
<h1>REPORTING BUGS</h1>
<p>Report bugs to the Github issues page: https://github.com/netkit-jh/netkit-jh-build/issues</p>
<p>Please follow the recommended templates when reporting bugs.</p>
`

const html = ReactHtmlParser(raw);
export default html;

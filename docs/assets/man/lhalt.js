import ReactHtmlParser from 'react-html-parser';

const raw = `
<h1>NAME</h1>
<p>lhalt - halt machines of a netkit lab</p>
<h1>SYNOPSIS</h1>
<p><strong>lhalt</strong> [options] [<em>MACHINE-NAME</em>...]</p>
<h1>DESCRIPTION</h1>
<p>The <em>lhalt</em> command can be used to gracefully shut down virtual machines of a Netkit lab. <em>lhalt</em> makes use of <strong>vhalt</strong> to halt virtual machines (see <strong>vhalt</strong>(1)).</p>
<p>By default, <em>vhalt</em> stops all the virtual machines of the lab. If a list of <em>MACHINE-NAME</em>s is provided, then only virtual machines with a matching name <em>and</em> that are part of the lab will be halted.</p>
<p>The following options are supported by <em>lhalt</em>:</p>
<dl>
<dt><strong>-d <em>DIRECTORY</em></strong></dt>
<dd><p>Halt the Netkit lab that is located inside <em>DIRECTORY</em>. If no <strong>-d</strong> option is provided, <em>lhalt</em> assumes that the lab is located in the current directory. The path to the lab directory (being that the current directory or one provided by <strong>-d</strong>) must never contain spaces.</p>
</dd>
<dt><strong>-l</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--list</strong></dt>
<dd><p>Show a list of currently running virtual machines after the lab has been halted. This is useful to check whether all the hosts have been shut down.</p>
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
<dd><p>This option prevents <em>lhalt</em> from checking whether virtual machines have properly halted. Hence, it speeds up the halt process. Notice that, unlike <strong>lcrash</strong> (see <strong>lcrash</strong>(1)), a shutdown fails or succeeds regardless of the use of this option (i.e., no benefit is gained from retrying without this option). This option slightly reduces the output of <em>lhalt</em> as well.<br />
This option is incompatible with <strong>-r</strong> or <strong>--remove-fs</strong>.</p>
</dd>
<dt><strong>-r</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--remove-fs</strong></dt>
<dd><p>Delete virtual machines (COW) filesystems (.disk files) after halting the corresponding machines. Default action is to keep the filesystems, so that the lab can be restarted while preserving filesystem contents.<br />
Using this option never affects the model filesystem. This option is incompatible with <strong>-q</strong> (<strong>--quick</strong>, <strong>--quiet</strong>).</p>
</dd>
</dl>
<p>See the README in the Netkit filesystem package for information about COW and model filesystems.</p>
<p>The following standard options are also supported.</p>
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
<p>Apart from this, <em>lhalt</em> supports no other environment variables.</p>
<h1>SEE ALSO</h1>
<p><em>lstart</em>(1), <em>lclean</em>(1), <em>lcrash</em>(1), <em>lrestart</em>(1), <em>linfo</em>(1), <em>ltest</em>(1), <em>vhalt</em>(1), Netkit filesystem README.</p>
<h1>AUTHOR</h1>
<p><em>lhalt</em> script: Stefano Pettini, Massimo Rimondini<br />
This man page: Fabio Ricci, Massimo Rimondini</p>
`

const html = ReactHtmlParser(raw);
export default html;

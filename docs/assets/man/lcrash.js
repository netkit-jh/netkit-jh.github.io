import ReactHtmlParser from 'react-html-parser';

const raw = `
<h1>NAME</h1>
<p>lcrash - crash machines of a netkit lab</p>
<h1>SYNOPSIS</h1>
<p><strong>lcrash</strong> [options] [<em>MACHINE-NAME</em>...]</p>
<h1>DESCRIPTION</h1>
<p>The <em>lcrash</em> command can be used to forcedly shutdown all the virtual machines of a Netkit lab. This roughly corresponds to suddenly unplugging them from the power socket. <em>lcrash</em> uses the <strong>vcrash</strong> command to stop virtual machines (see <strong>vcrash</strong>(1)).</p>
<p>If a list of <em>MACHINE-NAME</em>s is provided, only virtual machines with a matching name <em>and</em> that are part of the lab will be crashed. Otherwise, all the machines of the lab are crashed.</p>
<p>The following options are supported by <em>lcrash</em>:</p>
<dl>
<dt><strong>-d <em>DIRECTORY</em></strong></dt>
<dd><p>Crash the Netkit lab that is located inside <em>DIRECTORY</em>. If no <strong>-d</strong> option is provided, <em>lcrash</em> assumes that the lab is located in the current directory. The path to the lab directory (being that the current directory or one provided by <strong>-d</strong>) must never contain spaces.</p>
</dd>
<dt><strong>-F</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--keep-fs</strong></dt>
<dd><p>This option prevents <em>lcrash</em> from deleting virtual machines (COW) filesystems (.disk files). By default, <em>lcrash</em> removes the filesystem after crashing each virtual machine in order to ensure that virtual machines revert to their original state when the lab is restarted.</p>
</dd>
</dl>
<p>Notice that the model filesystem is never removed, regardless of the use of this option. See the README file in the Netkit filesystem package for information about COW and model filesystems.</p>
<dl>
<dt><strong>-k</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--kill</strong></dt>
<dd><p>There are two different ways of crashing a virtual machine. The first one is to send a special message that tells it to immediately shut down. This is also called the mconsole method. The second one is to simply kill running processes that correspond to the virtual machine.<br />
The mconsole method is usually faster, but may be ineffective if a virtual machine has somewhy frozen (in which case it is unable to receive messages). If it happens to fail, the other method (killing processes) is automatically tried. However, killing processes is considered a last resort.<br />
If the mconsole method fails too often, this option can be used to force <em>lcrash</em> to always kill processes. In general, there should be no need to use it.</p>
</dd>
<dt><strong>-l</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--list</strong></dt>
<dd><p>Show a list of currently running virtual machines after the lab has been crashed. This is useful to check whether all the hosts have been shut down.</p>
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
<dd><p>Do not check whether virtual machines have actually crashed. This results in a faster lab shutdown, but some hanging processes may be left behind. If this happens, try crashing the lab again without using this option or use <strong>vclean</strong> (see <strong>vclean</strong>(1)). This option also slightly reduces output information.</p>
</dd>
</dl>
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
<p>Apart from this, <em>lcrash</em> supports no other environment variables.</p>
<h1>SEE ALSO</h1>
<p><em>lstart</em>(1), <em>lclean</em>(1), <em>lhalt</em>(1), <em>lrestart</em>(1), <em>linfo</em>(1), <em>ltest</em>(1), <em>vclean</em>(1), <em>vcrash</em>(1), Netkit filesystem README.</p>
<h1>AUTHOR</h1>
<p><em>lcrash</em> script: Stefano Pettini, Massimo Rimondini<br />
This man page: Fabio Ricci, Massimo Rimondini</p>
`

const html = ReactHtmlParser(raw);
export default html;

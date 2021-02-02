import ReactHtmlParser from 'react-html-parser';

const raw = `
<h1>NAME</h1>
<p>lclean - clean temporary files created after launching netkit lab</p>
<h1>SYNOPSIS</h1>
<p><strong>lclean</strong> [options] [<em>MACHINE-NAME</em>...]</p>
<h1>DESCRIPTION</h1>
<p><em>lclean</em> can be used to delete temporary files that have been created while running a Netkit lab. Some of the them are specific for each virtual machine, while others are unique for the whole lab. Some are written inside the directory from which <em>lstart</em> has been invoked, while others are placed inside the lab directory.<br />
Assuming that <em>lab-path</em> is the directory where the lab is located, <em>lclean</em> deletes the following files, if found to exist:</p>
<blockquote>
<p>./<em>machine-name</em>.ready<br />
./<em>machine-name</em>.disk<br />
./<em>machine-name</em>.log (no longer produced by latest releases, but still removed for backwards compatibility)<br />
<em>lab-path</em>/readyfor.test<br />
</p>
</blockquote>
<p>If invoked with no arguments, <em>lclean</em> removes temporary files for all the virtual machines that make up the lab (i.e., <em>machine-name</em> is replaced by the name of each virtual machine). It is also possible to provide a list of <em>MACHINE-NAME</em>s, in which case <em>lclean</em> just removes temporary files for those virtual machines (as well as the 'readyfor.test' file).</p>
<p>Removing virtual machines COW filesystems (.disk files) implies that virtual machines contents are reverted to their original state when the lab is restarted. Of course, any persistent part of the lab is preserved, including those files that are automatically copied inside virtual machines during the boot phase.</p>
<p>See the README file in the Netkit filesystem package for more information about COW filesystems.</p>
<p>The following options are supported by <em>lclean</em>:</p>
<dl>
<dt><strong>-d <em>DIRECTORY</em></strong></dt>
<dd><p>Assume the Netkit lab that is located inside <em>DIRECTORY</em>. If no <strong>-d</strong> option is provided, <em>lclean</em> assumes that the lab is located in the current directory. The path to the lab directory (being that the current directory or one provided by <strong>-d</strong>) must never contain spaces.</p>
</dd>
</dl>
<p>This piece of information is necessary in order to remove some of the temporary files and to retrieve the list of the virtual machines that make up the lab.</p>
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
<dt><strong>-v</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--verbose</strong></dt>
<dd><p>Show which files are being deleted.</p>
</dd>
<dt><strong>--version</strong></dt>
<dd><p>Print information about the installed Netkit release and the host kernel version and exit. If ''<em>&lt;unavailable&gt;</em>'' is printed instead of a version number, then the corresponding information could not be retrieved (for example because a non-standard Netkit kernel or filesystem is being used).</p>
</dd>
</dl>
<h1>ENVIRONMENT VARIABLES</h1>
<p>All Netkit commands require that the <strong>NETKIT_HOME</strong> variable contains the name of the directory Netkit is installed in.</p>
<p>Apart from this, <em>lclean</em> supports no other environment variables.</p>
<h1>NOTES</h1>
<p>Despite the fact that the two command names sound similar, <em>lclean</em> has nothing to do with <strong>vclean</strong>(1). While <em>lclean</em> is a tool to get rid of temporary files inside a Netkit lab directory (i.e., it works on the host filesystem), <strong>vclean</strong>(1) is the Netkit ''panic button'', which allows to kill hanging processes and to restore settings that may have been altered by Netkit during past executions (firewall settings, configurations set up for tap interfaces, etc.).</p>
<h1>SEE ALSO</h1>
<p><em>lstart</em>(1), <em>lcrash</em>(1), <em>lhalt</em>(1), <em>lrestart</em>(1), <em>linfo</em>(1), <em>ltest</em>(1), <em>vclean</em>(1), Netkit filesystem README.</p>
<h1>AUTHOR</h1>
<p><em>lclean</em> script: Stefano Pettini, Fabio Ricci, Massimo Rimondini<br />
This man page: Fabio Ricci, Massimo Rimondini</p>
<h1>REPORTING BUGS</h1>
<p>Report bugs to the Github issues page: https://github.com/netkit-jh/netkit-jh-build/issues</p>
<p>Please follow the recommended templates when reporting bugs.</p>
`

const html = ReactHtmlParser(raw);
export default html;

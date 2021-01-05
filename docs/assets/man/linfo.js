import ReactHtmlParser from 'react-html-parser';

const raw = `
<h1>NAME</h1>
<p>linfo - show information about a netkit lab</p>
<h1>SYNOPSIS</h1>
<p><strong>linfo</strong> [options]</p>
<h1>DESCRIPTION</h1>
<p>This command can be used to display the following information about a Netkit lab without launching it:</p>
<dl>
<dt>–</dt>
<dd><p>descriptive information (retrieved from <em>lab.conf</em>)</p>
</dd>
<dt>–</dt>
<dd><p>number of virtual machines that make up the lab</p>
</dd>
<dt>–</dt>
<dd><p>whether the lab supports parallel startup (by means of a <em>lab.conf</em> file)</p>
</dd>
</dl>
<p>Optionally, <em>linfo</em> can generate a graphical link-level topology map of the lab and save it inside a PostScript file. This requires the Graphviz library to be installed on your system.</p>
<p>The following options are supported by <em>linfo</em>:</p>
<dl>
<dt><strong>-d <em>DIRECTORY</em></strong></dt>
<dd><p>Assume the Netkit lab that is located inside <em>DIRECTORY</em>. If no <strong>-d</strong> option is provided, <em>lhalt</em> assumes that the lab is located in the current directory. The path to the lab directory (being that the current directory or one provided by <strong>-d</strong>) must never contain spaces.</p>
</dd>
<dt><strong>-m <em>FILE</em></strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--map=<em>FILE</em></strong></dt>
<dd><p>Save a graphical link-level topology map of the lab in PostScript format inside <em>FILE</em>. This option requires the Graphviz library to be properly installed on your system in order to work.</p>
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
<h1>SEE ALSO</h1>
<p><em>lstart</em>(1), <em>lclean</em>(1), <em>lcrash</em>(1), <em>lhalt</em>(1), <em>lrestart</em>(1), <em>ltest</em>(1).</p>
<h1>AUTHOR</h1>
<p><em>linfo</em> script: Massimo Rimondini<br />
This man page: Massimo Rimondini</p>
`

const html = ReactHtmlParser(raw);
export default html;

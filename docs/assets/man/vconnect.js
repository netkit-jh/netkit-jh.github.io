import ReactHtmlParser from 'react-html-parser';

const raw = `
<h1>NAME</h1>
<p>vconnect - connect to the tmux session of a netkit virtual machine.</p>
<h1>SYNOPSIS</h1>
<p><strong>vconnect</strong> -m <em>MACHINE-NAME</em> --terminal --retry-count N --interval X</p>
<p>This will connect you to the tmux session of machine with name MACHINE-NAME, opening a new terminal as defined by TERM_TYPE in netkit.conf. If the tmux session does not initially exist it will try N times to connect, waiting X seconds between each attempt. After this it will exit</p>
<h1>DESCRIPTION</h1>
<p>The <em>vconnect</em> command connects you to the tmux session of a netkit virtual machine. You can connect either in your current shell, or in a new terminal.</p>
<h1>OPTIONS</h1>
<dl>
<dt><strong>-h</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--help</strong></dt>
<dd><p>Print help message and exit. Other arguments will be ignored.</p>
</dd>
<dt><strong>-l</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--list</strong></dt>
<dd><p>List all running sessions on the tmux 'netkit' server.</p>
</dd>
<dt><strong>-t</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--terminal</strong></dt>
<dd><p>Connect to the tmux session from a new terminal. The terminal opened is dependent on the TERM_TYPE set in netkit.conf.</p>
</dd>
<dt><strong>-m <em>MACHINENAME</em></strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--machine <em>MACHINENAME</em></strong></dt>
<dd><p>Name of the netkit machine to connect to.</p>
</dd>
<dt><strong>-r <em>N</em></strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--retry-count <em>N</em></strong></dt>
<dd><p>If the first attempt to connect to the tmux session fails, retry N times.</p>
</dd>
</dl>
<p>-n <em>X</em></p>
<dl>
<dt><strong>--interval <em>X</em></strong></dt>
<dd><p>If the first attempt to connect to the tmux session fails, and retry-count is more than 1, sleep for X seconds between each attempt.</p>
</dd>
</dl>
<h1>ENVIRONMENT VARIABLES</h1>
<p>All Netkit commands require that the <strong>NETKIT_HOME</strong> variable contains the name of the directory Netkit is installed in.</p>
<p>Apart from this, <em>vconnect</em> supports no other environment variables.</p>
<h1>SEE ALSO</h1>
<p><em>vclean</em>(1), <em>vconf</em>(1), <em>vcrash</em>(1), <em>vhalt</em>(1), <em>vlist</em>(1), <em>vcommand</em>(1), <em>vstart</em>(1).</p>
<h1>AUTHOR</h1>
<p><em>vconnect</em> script: Billy Bromell<br />
This man page: Billy Bromell</p>
`

const html = ReactHtmlParser(raw);
export default html;

import ReactHtmlParser from 'react-html-parser';

const raw = `
<h1>NAME</h1>
<p>vcommand - send a command to a netkit virtual machine through its tmux session.</p>
<h1>SYNOPSIS</h1>
<p><strong>vcommand</strong> -m <em>MACHINE-NAME</em> --timeout 10 --command ping -c1 127.0.0.1</p>
<h1>DESCRIPTION</h1>
<p><em>vcommand</em> will use the tmux send-keys command to type the command into the tmux session for the machine. It will then wait for the time specified by timeout, then read any new text that has appeared in the tmux session, and print this.</p>
<p><br />
Note that there is only one shell instance in tmux, so sending multiple commands at once / sending commands while the tmux session is being actively used may result in undesirable behaviour. vcommand gives you access to the input and output of the machines tty, and not an instance of a shell to execute commands in.</p>
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
<dt><strong>-v</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--verbose</strong></dt>
<dd><p>Set the VERBOSE variable to TRUE so it can be used for adding debugging echo statements in the vcommand script.</p>
</dd>
<dt><strong>-m <em>MACHINENAME</em></strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--machine <em>MACHINENAME</em></strong></dt>
<dd><p>Name of the netkit machine to send the command to.</p>
</dd>
<dt><strong>-n <em>N</em></strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--timeout <em>N</em></strong></dt>
<dd><p>Wait N seconds after entering the command to the tmux before grabbing any new output from the tmux session.</p>
</dd>
</dl>
<p>The default value for this is 1 second.</p>
<p><br />
As we don't have an interactive shell we don't know when a command has finished executing. Therefore we have to choose how long we are going to wait before grabbing any new output.</p>
<p>-c <em>COMMAND</em></p>
<dl>
<dt><strong>--command <em>COMMAND</em></strong></dt>
<dd><p>Command to send to the tmux session. This should always be the last argument given to vcommand. Anything that follows this will be taken as one string and sent to the tmux session.</p>
</dd>
</dl>
<h1>ENVIRONMENT VARIABLES</h1>
<p>All Netkit commands require that the <strong>NETKIT_HOME</strong> variable contains the name of the directory Netkit is installed in.</p>
<p>Apart from this, <em>vcommand</em> supports no other environment variables.</p>
<h1>SEE ALSO</h1>
<p><em>vclean</em>(1), <em>vconf</em>(1), <em>vcrash</em>(1), <em>vhalt</em>(1), <em>vlist</em>(1), <em>vconnect</em>(1), <em>vstart</em>(1).</p>
<h1>AUTHOR</h1>
<p><em>vcommand</em> script: Billy Bromell<br />
This man page: Billy Bromell</p>
<h1>REPORTING BUGS</h1>
<p>Report bugs to the Github issues page: https://github.com/netkit-jh/netkit-jh-build/issues</p>
<p>Please follow the recommended templates when reporting bugs.</p>
`

const html = ReactHtmlParser(raw);
export default html;

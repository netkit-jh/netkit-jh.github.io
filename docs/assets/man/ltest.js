import ReactHtmlParser from 'react-html-parser';

const raw = `
<h1>NAME</h1>
<p>ltest - test a netkit lab</p>
<h1>SYNOPSIS</h1>
<p><strong>ltest</strong> [options] [<em>MACHINE-NAME</em>...]</p>
<h1>DESCRIPTION</h1>
<p><em>ltest</em> is a tool for retrieving and saving information about the state of running virtual machines inside a Netkit lab. These information can then be distributed with the lab itself, so that users can easily test whether the lab still behaves in the expected way when it is being launched on a different machine or Netkit distribution.</p>
<p>Basically, <em>ltest</em> takes care of launching the lab in a 'test mode', running an ad-hoc set of scripts on virtual machines, and storing their output on the host filesystem. If the test is being run for the first time, <em>ltest</em> creates a ''signature'' of the test results that is used as a fingerprint of a correctly behaving lab. The next times that the test is run, test results are compared with the signature to check that the lab still behaves as expected. After running the test, the lab is then automatically stopped, any temporary files are deleted and the outcome of the test is printed as output.</p>
<p>In the following, it is assumed that <em>lab-path</em> is the directory in which the lab is located.</p>
<p>Whenever a test is run, a subdirectory '_test' is created inside <em>lab-path</em> (if it does not already exist) and the results of the test are stored inside it. Any existing results of previous tests are overwritten. Subdirectory '_test/signature' and '_test/results' will contain the signature of the lab test and the outcome of the last executed test, respectively.</p>
<p>Providing a list of <em>MACHINE-NAME</em>s on the command line has the effect of limiting the scope of the test to these virtual machines (comparing two tests performed on different sets of virtual machines obviously leads to a negative outcome).</p>
<p><em>ltest</em> supports the same options as <em>lstart</em>(1), except <strong>-f</strong>, and some additional options described below.</p>
<p><strong>NOTE</strong>: Unless differently specified (e.g., by using the <strong>--pass</strong> option or environment variables), <em>ltest</em> runs virtual machines without an attached terminal. Therefore, no window will pop up and no output will be shown by virtual machines during a test. This has been chosen in order to ease the automation of regression tests.</p>
<h1>OPTIONS</h1>
<p>Besides the options supported by <strong>lstart</strong>, <strong>ltest</strong> also support the following options:</p>
<dl>
<dt><strong>-R</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--rebuild-signature</strong></dt>
<dd><p>Force generating a new signature for the lab, even if one already exists. Overwrites any existing signature.</p>
</dd>
<dt><strong>-S</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--script-mode</strong></dt>
<dd><p>Use a more concise output with pretty printing of the test outcome, which is more suitable for testing a large number of labs from a script.</p>
</dd>
<dt><strong>--verify=<em>TESTTYPE</em></strong></dt>
<dd><p>After a signature has been generated, the outcome of any following tests is compared with information in the signature. By default, for each virtual machine <em>ltest</em> verifies the outcome of the user-defined test if one is available in the signature, or of the built-in test otherwise. Option <strong>--verify</strong> allows to force <em>ltest</em> to always verify only a certain kind of test. Possible values for <em>TESTTYPE</em> are as follows:</p>
<dl>
<dt><strong>user</strong></dt>
<dd><p>Consider only user-defined test scripts.</p>
</dd>
<dt><strong>builtin</strong></dt>
<dd><p>Consider only predefined built-in tests.</p>
</dd>
<dt><strong>both</strong></dt>
<dd><p>Consider both kinds of test scripts (i.e., takes into account the built-in test even when a user-defined test exists for a certain virtual machine).</p>
</dd>
</dl>
<p>Verifications are always performed only for those tests that exist in the signature, regardless of whether or not option <strong>--verify</strong> is being used.</p>
</dd>
</dl>
<h1>HOW TO PERFORM A TEST</h1>
<p>A Netkit test consists of two kinds of scripts: <strong>default</strong> (built-in) and <strong>user</strong>.</p>
<dl>
<dt>–</dt>
<dd><p>The <strong>default</strong> script is built-in into the <em>ltest</em> support scripts and cannot be changed by the user. It runs some commands inside the virtual machine in order to store the state of its network interfaces, routing table, listening TCP and UDP ports, and running processes.</p>
</dd>
</dl>
<p>The output of the <strong>default</strong> script is saved into</p>
<p>'<em>lab-path</em>/_test/results/<em>machine</em>.default',</p>
<p>where <em>machine</em> is the name of the virtual machine the test has been performed on. The file format for the output of the default test is quite simple. There are several sections which are started by a textual description between square brackets. The contents of each section are the output of a specific command. The following list describes both the sections and the corresponding commands:</p>
<blockquote>
<dl>
<dt><strong>[NETWORK INTERFACES]</strong></dt>
<dd><p>(essentially) the output of 'ip addr show'.</p>
</dd>
<dt><strong>[ROUTING TABLE]</strong></dt>
<dd><p>(essentially) the output of 'route -n'.</p>
</dd>
<dt><strong>[LISTENING PORTS]</strong></dt>
<dd><p>(essentially) the output of 'netstat -tuwln'.</p>
</dd>
<dt><strong>[PROCESSES]</strong></dt>
<dd><p>(essentially) the output of 'ps -e -o uid,command'.</p>
</dd>
</dl>
</blockquote>
<dl>
<dt>–</dt>
<dd><p>The <strong>user</strong> script may be used to customize the test procedure. In particular, it can be used to dump information that are defined by a user through a personal script.</p>
</dd>
</dl>
<p><em>ltest</em> reads the user test script for machine <em>machine</em> from</p>
<p>'<em>lab-path</em>/_test/<em>machine</em>.test'</p>
<p>and writes the output to</p>
<p>'<em>lab-path</em>/_test/results/<em>machine</em>.user'.</p>
<p>Remember that the user test script must be marked as executable. You can achieve this by using the follwing command:</p>
<blockquote>
<p>chmod +x <em>lab-path</em>/_test/<em>machine</em>.test</p>
</blockquote>
<p><strong>Notice</strong>: every time you launch <em>ltest</em> any existing output of previous tests is overwritten. Hence, remember to move output files elsewhere before performing other instances of the test.</p>
<h1>RETURN VALUE</h1>
<p><em>ltest</em> has a zero return value if and only if the test completed successfully or a new signature has been generated. This allows, for example, to automate lab tests by using a command like the following:</p>
<blockquote>
<pre><code>if ! ltest -d my_lab --script-mode; then
   echo &quot;Lab test failed!&quot; &gt; lab.log
fi</code></pre>
</blockquote>
<h1>FILES</h1>
<h2>Test scripts</h2>
<dl>
<dt><em><em>lab-path</em>/_test/<em>machine</em>.test</em></dt>
<dd><p>This is an executable script created by the user. Actually, it can be any kind of executable file (i.e., binary files are allowed as well) and, in case it is a script, it can be written in any scripting language whose interpreter is installed inside virtual machines.</p>
</dd>
</dl>
<p>The only requirement is that it must be an executable file. To achieve this, you can use the following command:</p>
<pre><code>chmod +x lab-path/_test/machine.test</code></pre>
<h2>Test output files</h2>
<p>The output of the test scripts is stored inside the following files:</p>
<dl>
<dt><em><em>lab-path</em>/_test/results/<em>machine</em>.default</em></dt>
<dd><p>This file contains the output of the execution of the default test operations.</p>
</dd>
<dt><em><em>lab-path</em>/_test/results/<em>machine</em>.user</em></dt>
<dd><p>This file contains the output of the execution of <em>lab-path</em>/_test/<em>machine</em>.test.</p>
</dd>
</dl>
<h2>Test signature files</h2>
<p>The first time a test is being run on a lab, <em>ltest</em> creates a ''signature'' instead of the test results. The signature is used by subsequent tests as a fingerprint of a correctly running lab. Signature files are exactly the same as result files, and are placed at the following locations:</p>
<dl>
<dt><em><em>lab-path</em>/_test/signature/<em>machine</em>.user</em></dt>
<dd>
</dd>
</dl>
<p><em>lab-path</em>/_test/results/<em>machine</em>.default</p>
<h2>Other files</h2>
<dl>
<dt><em>/etc/init.d/netkit-test-phase (inside virtual machines)</em></dt>
<dd><p>This file is the container for the default test script. It resides in the virtual machines filesystem. In case you want to alter the default test operations, this is the file you must work on.</p>
</dd>
</dl>
<p><strong>Notice</strong>: remember to launch a virtual machine by using the <strong>-W</strong> option of <strong>vstart</strong> (see <strong>vstart</strong>(1)) in order to make the changes to <em>netkit-test-phase</em> permanent. Please read carefully the man page of <strong>vstart</strong>(1) and the README in the Netkit filesystem package before changing the Netkit filesystem.</p>
<h1>EXAMPLES</h1>
<p>The following one is an example of a test file 'pc1.default' that has been generated by the default testing script:</p>
<blockquote>
<pre><code>[INTERFACES]

lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:16436  Metric:1


[ROUTE]

Kernel IP routing table
Destination     Gateway         Genmask         Flags   MSS Window  irtt Iface

[LISTENING PORTS]

Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State

[PROCESSES]

  UID COMMAND
    0 init [2]
    0 [ksoftirqd/0]
    0 [events/0]
    0 [khelper]
    0 [kthread]
    0 [kblockd/0]
    0 [pdflush]
    0 [pdflush]
    0 [aio/0]
    0 [kswapd0]
    0 /bin/sh /etc/init.d/rc 2
    0 /sbin/klogd
    0 /sbin/syslogd
    0 /bin/bash /etc/rc2.d/S99netkit-phase2 start
    0 /bin/bash /etc/init.d/netkit-test-phase
    0 /bin/ps -e -o uid,command</code></pre>
</blockquote>
<p>In order to write a customized test script you can proceed as follows. Assume your lab is located inside directory</p>
<p>'/home/foo/lab',</p>
<p>and that it consists of machines <strong>pc1</strong> and <strong>pc2</strong>. The first step to customize the test is to create a subdirectory</p>
<p>'/home/foo/lab/_test'.</p>
<p>Once done, you can create your own test script</p>
<p>'/home/foo/lab/_test/pc1.test'</p>
<p>for machine <strong>pc1</strong>. For example, the following script can be used to dump the current system time of the virtual machine by using python:</p>
<blockquote>
<pre><code>#!/usr/bin/python
import time
print time.asctime(time.localtime(time.time()));</code></pre>
</blockquote>
<p>It is now possible to launch the lab in test mode by using 'ltest /home/foo/lab'. This will execute the default test operations (i.e., dump of network interfaces, routing table, etc.) on both <strong>pc1</strong> and <strong>pc2</strong> and the customized script on <strong>pc1</strong> only. The results of the tests will be saved into</p>
<p>'/home/foo/lab/_test/results',</p>
<p>and will consist of files 'pc1.default', 'pc1.user', and 'pc2.default'. In particular, 'pc1.user' should look as follows:</p>
<blockquote>
<pre><code>Thu Jul 21 18:31:25 2005</code></pre>
</blockquote>
<h1>NOTES</h1>
<p>The typical usage of this script is for regression tests of Netkit labs over different version of Netkit and for testing that Netkit labs work properly on different host configurations.</p>
<h1>SEE ALSO</h1>
<p><em>lstart</em>(1), <em>lclean</em>(1), <em>lcrash</em>(1), <em>lrestart</em>(1), <em>linfo</em>(1), <em>lhalt</em>(1).</p>
<h1>AUTHOR</h1>
<p>ltest script: Fabio Ricci, Stefano Pettini, Massimo Rimondini<br />
This man page: Fabio Ricci, Massimo Rimondini</p>
`

const html = ReactHtmlParser(raw);
export default html;

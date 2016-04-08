using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace myPro
{
    public partial class Form1 : Form
    {
        int count = 0;
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

            System.Timers.Timer t = new System.Timers.Timer(3000);
            t.Elapsed += new System.Timers.ElapsedEventHandler(theout);
            t.AutoReset = true;
            t.Enabled = true;
            t.Start();

        }
        public void theout(object source, System.Timers.ElapsedEventArgs e)
        {
            count = count + 1;
            judge();

        }
        public void judge()
        {

            if (count == 0 || count % 3 == 0)
            {
                this.BackgroundImage = Properties.Resources.bg1;

            }
            if (count == 1 || count % 3 == 1)
            {
                this.BackgroundImage = Properties.Resources.bg2;
            }
            if (count == 2 || count % 3 == 2)
            {
                this.BackgroundImage = Properties.Resources.bg3;

            }

        }

        private void button1_Click(object sender, EventArgs e)
        {
            main mymain = new main();
            mymain.Owner = this;
            this.Hide();
            mymain.ShowDialog();
            Application.ExitThread();
        }
    }
}

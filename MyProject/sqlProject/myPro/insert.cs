using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

using System.Data.SqlClient;
using System.Configuration;

namespace myPro
{
    public partial class insert : Form
    {
        SqlConnection sqlConn;
        SqlCommand cmd;
        public insert()
        {
            InitializeComponent();
        }
        private void OpenDB()
        {
            string strConn = ConfigurationManager.ConnectionStrings["myproject"].ConnectionString;
            sqlConn = new SqlConnection(strConn);
            if (sqlConn.State != ConnectionState.Open)
            {
                sqlConn.Open();
            }
        }

        private void CloseDB()
        {
            if (sqlConn.State != ConnectionState.Closed)
            {
                sqlConn.Close();
            }
        }
        private void insert_Load(object sender, EventArgs e)
        {
            this.SetStyle(ControlStyles.DoubleBuffer | ControlStyles.UserPaint | ControlStyles.AllPaintingInWmPaint, true);
            this.UpdateStyles();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            main mymain = new main();

            this.Hide();
            mymain.ShowDialog();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            if (richTextBox1.Text != ""&&textBox3.Text!="")
            {
                OpenDB();
                string mytheme = textBox3.Text.ToString();
                string myweather = textBox1.Text.ToString();
                string mymood = textBox2.Text.ToString();
                string mybody = richTextBox1.Text.ToString();
                SqlCommand comd = new SqlCommand("exec   pro_insert '" + mytheme + "','" + myweather + "','" + mymood + "','" + mybody + "'", sqlConn);
                comd.ExecuteNonQuery();
                CloseDB();
                MessageBox.Show("新建成功！");
            }
            else
            {
                MessageBox.Show("主题和正文不能为空！");
            }
        }

        private void textBox3_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }
    }
}

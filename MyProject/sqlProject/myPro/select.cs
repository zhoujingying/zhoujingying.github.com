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
    public partial class select : Form
    {

        SqlConnection sqlConn;
        SqlCommand cmd;
        SqlDataAdapter adpt;
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
        public select()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            main mymain = new main();

            this.Hide();
            mymain.ShowDialog();
           
        }

        private void select_Load(object sender, EventArgs e)
        {
            this.SetStyle(ControlStyles.DoubleBuffer | ControlStyles.UserPaint | ControlStyles.AllPaintingInWmPaint, true);
            this.UpdateStyles();
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            int i = this.dataGridView1.CurrentRow.Index;
            string str = dataGridView1.Rows[i].Cells[0].Value.ToString();
            OpenDB();
            SqlCommand comd2 = new SqlCommand("exec  insertId '" + str + "'", sqlConn);
            comd2.ExecuteNonQuery();
            CloseDB();
            otherChange mychange = new otherChange();
            //mychange.Owner = this;
            //this.Hide();
            mychange.ShowDialog();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            if (textBox1.Text != "")
            {
                if (checkBox1.Checked == true)
                {
                    string mystr = textBox1.Text.ToString();
                    OpenDB();
                    SqlCommand comd0 = new SqlCommand("select No_,Theme,Mytime from main where (convert(varchar(40),No_)) like '%'+'" + mystr + "'+'%'", sqlConn);
                    comd0.ExecuteNonQuery();
                    DataSet ds = new DataSet();

                    adpt = new SqlDataAdapter(comd0);
                    adpt.Fill(ds);
                    dataGridView1.DataSource = ds.Tables[0];
                    CloseDB();

                }
                else
                {
                    string mystr = textBox1.Text.ToString();
                    OpenDB();
                    SqlCommand comd1 = new SqlCommand("exec  pro_select '" + mystr + "'", sqlConn);
                    comd1.ExecuteNonQuery();
                    DataSet ds = new DataSet();

                    adpt = new SqlDataAdapter(comd1);
                    adpt.Fill(ds);
                    dataGridView1.DataSource = ds.Tables[0];
                    CloseDB();
                }
            }
            else
            {
                MessageBox.Show("请输入搜索内容！");
            }
        }

        private void checkBox1_CheckedChanged(object sender, EventArgs e)
        {
            if (checkBox1.Checked == true)
                textBox1.Text = "请输入查询序号";
            else
                textBox1.Text = "";
        }
       
    }
}

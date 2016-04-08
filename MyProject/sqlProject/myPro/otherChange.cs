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
    public partial class otherChange : Form
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
        public otherChange()
        {
            InitializeComponent();
        }

        private void otherChange_Load(object sender, EventArgs e)
        {
            this.SetStyle(ControlStyles.DoubleBuffer | ControlStyles.UserPaint | ControlStyles.AllPaintingInWmPaint, true);
            this.UpdateStyles();

            timer1.Start();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            OpenDB();
            int i = this.dataGridView1.CurrentRow.Index;
            string theme = dataGridView1.Rows[i].Cells[0].Value.ToString();
            string weather = dataGridView1.Rows[i].Cells[1].Value.ToString();
            string mood = dataGridView1.Rows[i].Cells[2].Value.ToString();
            string body = richTextBox1.Text.ToString();

            SqlCommand comd1 = new SqlCommand("exec  pro_update '" + theme + "','" + weather + "','" + mood + "','" + body + "'", sqlConn);
            comd1.ExecuteScalar();
            MessageBox.Show("修改成功！");
        }

        private void timer1_Tick(object sender, EventArgs e)
        {

            timer1.Stop();
            OpenDB();
            SqlCommand comd1 = new SqlCommand("select Mytime from my_show,number where number.NO_=my_show.NO_", sqlConn);
            textBox1.Text = comd1.ExecuteScalar().ToString();

            SqlCommand comd2 = new SqlCommand("select Theme,Weather,Mood from alllist,number where number.No_=alllist.No_", sqlConn);
            DataSet ds = new DataSet();

            adpt = new SqlDataAdapter(comd2);
            adpt.Fill(ds);
            dataGridView1.DataSource = ds.Tables[0];

            SqlCommand comd3 = new SqlCommand("select Body from alllist,number where number.No_=alllist.No_", sqlConn);
            richTextBox1.Text = comd3.ExecuteScalar().ToString();
            CloseDB();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            OpenDB();
            SqlCommand comd1 = new SqlCommand("delete from number", sqlConn);
            comd1.ExecuteNonQuery();
            CloseDB();
            this.Close();
        }
    }
}

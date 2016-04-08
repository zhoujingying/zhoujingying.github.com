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
using System.Threading;
namespace myPro
{
    public partial class main : Form
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
        public main()
        {
            InitializeComponent();
        }

        private void main_Load(object sender, EventArgs e)
        {
        
          
            this.SetStyle(ControlStyles.DoubleBuffer | ControlStyles.UserPaint | ControlStyles.AllPaintingInWmPaint, true);
            this.UpdateStyles();

            timer1.Start();

        }

      
        

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            int i = this.dataGridView1.CurrentRow.Index;
            string str = dataGridView1.Rows[i].Cells[0].Value.ToString();
            OpenDB();
            SqlCommand comd2 = new SqlCommand("exec  insertId '" + str + "'", sqlConn);
            comd2.ExecuteNonQuery();
            CloseDB();
            change mychange = new change();
            //mychange.Owner = this;
            this.Hide();
            mychange.ShowDialog();
            //Application.ExitThread();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            select form = new select();
            this.Hide();
            form.ShowDialog();
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            timer1.Stop();
            bind_DG();
         
        }

        private void button2_Click(object sender, EventArgs e)
        {
            insert from = new insert();
            this.Hide();
            from.ShowDialog();
           
        }

        private void button3_Click(object sender, EventArgs e)
        {
            int i = this.dataGridView1.CurrentRow.Index;
            string str = dataGridView1.Rows[i].Cells[0].Value.ToString();
            if (MessageBox.Show("确定删除序号为'"+str+"'的日志?", "提示", MessageBoxButtons.YesNo) == DialogResult.Yes)
            {
                OpenDB();
                SqlCommand comd = new SqlCommand("exec pro_delete '" + str + "'", sqlConn);
                comd.ExecuteNonQuery();
                CloseDB();
                MessageBox.Show("删除成功！");
                bind_DG();

            } 
        }
        private void bind_DG()
        {
            OpenDB();
            SqlCommand comd1 = new SqlCommand("select* from my_show", sqlConn);
            comd1.ExecuteNonQuery();
            DataSet ds = new DataSet();

            adpt = new SqlDataAdapter(comd1);
            adpt.Fill(ds);
            dataGridView1.DataSource = ds.Tables[0];
            CloseDB();
        }
    }
}

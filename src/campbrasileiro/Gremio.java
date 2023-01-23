package campbrasileiro;

import java.awt.Color;
import java.awt.Component;
import java.awt.Dimension;
import java.awt.EventQueue;
import java.awt.Graphics;
import java.awt.Image;
import java.awt.Insets;
import java.awt.Toolkit;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.RowSorter;
import javax.swing.SortOrder;
import javax.swing.border.Border;
import javax.swing.border.LineBorder;
import javax.swing.border.TitledBorder;
import javax.swing.plaf.basic.BasicScrollBarUI;
import javax.swing.table.TableModel;
import javax.swing.table.TableRowSorter;


public class Gremio extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;
	
	JPanel jp;
	JTable tb;
	JButton b1, b2, b3;
	String x[] = { "Nome", "Idade", "Posição", "Time", "Assistências", "Gols", "País", "N° Camisa" };
	String y[][] = new String[30][8];
	int i=0, j=0;
	
	Gremio() {
		super("Grêmio");
		
		ImageIcon img1 = new ImageIcon(ClassLoader.getSystemResource("icons/gremio.png"));
		Image img2 = img1.getImage().getScaledInstance(200, 200, Image.SCALE_DEFAULT);
		ImageIcon img3 = new ImageIcon(img2);
		JLabel l7 = new JLabel(img3);
		l7.setBounds(500, 20, 200, 250);
		add(l7);
		
		jp = new JPanel();
		setSize(1260, 700);
		jp.setLayout(null);
		this.setResizable(false);

		Dimension dim = Toolkit.getDefaultToolkit().getScreenSize();
		this.setLocation(dim.width / 2 - this.getSize().width / 2, dim.height / 2 - this.getSize().height / 2);

		jp.setBounds(0, 0, 1243, 660);
		jp.setBackground(new Color(18, 18, 18));
		jp.setBorder(new TitledBorder(new LineBorder(new Color(98, 0, 238), 2), // ((r: g: b:), thickness)
				"Grêmio", TitledBorder.LEADING, TitledBorder.TOP, null, new Color(55, 0, 179)));
		add(jp);
		
		try {
			String query = "SELECT * FROM jogador WHERE time= 'Grêmio'";
			Conn c = new Conn();
			ResultSet rs = c.st.executeQuery(query);
			
			while (rs.next()) {
				y[i][j++] = rs.getString("nome");
				y[i][j++] = rs.getString("idade");
				y[i][j++] = rs.getString("posicao");
				y[i][j++] = rs.getString("time");
				y[i][j++] = rs.getString("assist");
				y[i][j++] = rs.getString("gols");
				y[i][j++] = rs.getString("pais");
				y[i][j++] = rs.getString("numcamisa");
				i++;
				j=0;
			}
			
			tb = new JTable(y, x);
			tb.setBackground(new Color(28, 28, 28));
			tb.setForeground(Color.WHITE);
			TableRowSorter<TableModel> sorter = new TableRowSorter<TableModel>(tb.getModel());
			tb.setRowSorter(sorter);
			
			List<RowSorter.SortKey> sortKeys = new ArrayList<>(100);
			sortKeys.add(new RowSorter.SortKey(2, SortOrder.DESCENDING));
			sortKeys.add(new RowSorter.SortKey(5, SortOrder.DESCENDING));
			sortKeys.add(new RowSorter.SortKey(4, SortOrder.DESCENDING));
			sortKeys.add(new RowSorter.SortKey(0, SortOrder.ASCENDING));
			sorter.setSortKeys(sortKeys);
		}
		catch (Exception e) {
			e.printStackTrace();
		}
		
		JScrollPane sp = new JScrollPane(tb);
		sp.setBounds(20, 300, 1200, 330);
		sp.setBackground(new Color(28, 28, 28));
		sp.getVerticalScrollBar().setBackground(new Color(28, 28, 28));
		jp.add(sp);
		sp.getVerticalScrollBar().setUI(new BasicScrollBarUI() {
			@Override
			protected void configureScrollBarColors() {
				this.thumbColor = new Color(98, 0, 238);
			}
		});
		
		b2 = new JButton("Jogos");
		b2.setBounds(900, 20, 150, 40);
		b2.setBackground(new Color(28, 28, 28));
		b2.setForeground(Color.WHITE);
		b2.setBorder(new RoundedBorder(10));
		b2.setFocusable(false);
		jp.add(b2);
		b2.addActionListener(new ActionListener(){
            public void actionPerformed(ActionEvent ae){
                try{
                    new GFBPAJogos().setVisible(true);
                }catch(Exception e){
                	e.printStackTrace();
                }
            }
        });
	
		b1 = new JButton("Próximo >>>");
		b1.setBounds(1075, 20, 150, 40);
		b1.setBackground(new Color(28, 28, 28));
		b1.setForeground(Color.WHITE);
		b1.setBorder(new RoundedBorder(10));
		jp.add(b1);
		b1.addActionListener(new ActionListener(){
            public void actionPerformed(ActionEvent ae){
                try{
                    setVisible(false);
                    new Internacional().setVisible(true);
                }catch(Exception e){
                	e.printStackTrace();
                }
            }
        });
	}
	
	private static class RoundedBorder implements Border {

		private int radius;

		RoundedBorder(int radius) {
			this.radius = radius;
		}

		public Insets getBorderInsets(Component c) {
			return new Insets(this.radius + 1, this.radius + 1, this.radius + 2, this.radius);
		}

		public boolean isBorderOpaque() {
			return true;
		}

		public void paintBorder(Component c, Graphics g, int x, int y, int width, int height) {
			g.setColor(new Color(97, 97, 97));
			g.drawRoundRect(x, y, width - 1, height - 1, radius, radius);
		}

	}
	
	@Override
	public void actionPerformed(ActionEvent actionEvent) {
	}
	
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Gremio frame = new Gremio();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}
}

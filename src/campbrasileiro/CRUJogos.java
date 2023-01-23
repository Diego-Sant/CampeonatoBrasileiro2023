package campbrasileiro;

import java.awt.Color;
import java.awt.Component;
import java.awt.Dimension;
import java.awt.EventQueue;
import java.awt.Graphics;
import java.awt.Insets;
import java.awt.Toolkit;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.ResultSet;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.border.Border;
import javax.swing.border.LineBorder;
import javax.swing.border.TitledBorder;
import javax.swing.plaf.basic.BasicScrollBarUI;


public class CRUJogos extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;
	
	JPanel jp;
	JTable tb;
	JButton b1, b2, b3;
	String x[] = { "Time da casa", "Placar", "Time de fora", "Campeonato", "Resultado", "ID" };
	String y[][] = new String[100][8];
	int i=0, j=0;
	
	CRUJogos() {
		super("Cruzeiro");
		jp = new JPanel();
		setSize(1260, 700);
		jp.setLayout(null);
		this.setResizable(false);

		Dimension dim = Toolkit.getDefaultToolkit().getScreenSize();
		this.setLocation(dim.width / 2 - this.getSize().width / 2, dim.height / 2 - this.getSize().height / 2);

		jp.setBounds(0, 0, 1243, 660);
		jp.setBackground(new Color(18, 18, 18));
		jp.setBorder(new TitledBorder(new LineBorder(new Color(98, 0, 238), 2), // ((r: g: b:), thickness)
				"Cruzeiro", TitledBorder.LEADING, TitledBorder.TOP, null, new Color(55, 0, 179)));
		add(jp);
		
		try {
			String query = "SELECT * FROM jogos WHERE time= 'Cruzeiro'";
			Conn c = new Conn();
			ResultSet rs = c.st.executeQuery(query);
			
			while (rs.next()) {
				y[i][j++] = rs.getString("casa");
				y[i][j++] = rs.getString("placar");
				y[i][j++] = rs.getString("fora");
				y[i][j++] = rs.getString("campeonato");
				y[i][j++] = rs.getString("resultado");
				y[i][j++] = rs.getString("id");
				i++;
				j=0;
			}
			
			tb = new JTable(y, x);
			tb.setBackground(new Color(28, 28, 28));
			tb.setForeground(Color.WHITE);
		}
		catch (Exception e) {
			e.printStackTrace();
		}
		
		JScrollPane sp = new JScrollPane(tb);
		sp.setBounds(20, 80, 1200, 560);
		sp.setBackground(new Color(28, 28, 28));
		sp.getVerticalScrollBar().setBackground(new Color(28, 28, 28));
		jp.add(sp);
		sp.getVerticalScrollBar().setUI(new BasicScrollBarUI() {
			@Override
			protected void configureScrollBarColors() {
				this.thumbColor = new Color(98, 0, 238);
			}
		});
		
		b2 = new JButton("Voltar");
		b2.setBounds(20, 25, 150, 40);
		b2.setBackground(new Color(28, 28, 28));
		b2.setForeground(Color.WHITE);
		b2.setBorder(new RoundedBorder(10));
		b2.setFocusable(false);
		jp.add(b2);
		b2.addActionListener(new ActionListener(){
            public void actionPerformed(ActionEvent ae){
                try{
                    setVisible(false);
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
					CRUJogos frame = new CRUJogos();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}
}


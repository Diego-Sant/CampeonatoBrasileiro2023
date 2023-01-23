package campbrasileiro;

import java.awt.Choice;
import java.awt.Color;
import java.awt.Component;
import java.awt.Dimension;
import java.awt.EventQueue;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Insets;
import java.awt.Shape;
import java.awt.Toolkit;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.geom.RoundRectangle2D;
import java.sql.ResultSet;

import javax.swing.DefaultListCellRenderer;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextField;
import javax.swing.border.Border;
import javax.swing.border.LineBorder;
import javax.swing.border.TitledBorder;

public class GameUpdate extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;
	
	JPanel jp;
	JLabel l1, l2, l3, l4, l5, l6, l7, l8, l9;
	JTextField tf, t1, t2, t3, t4, t5, t6, t7;
	JButton b1, b2, b3;
	JComboBox<String> c1, c2, c3, c4;
	String name;
	Choice ch;
	
	GameUpdate() {
		super("Atualizar jogadores");
		jp = new JPanel();
		setSize(900, 500);
		jp.setLayout(null);
		this.setResizable(false);

		Dimension dim = Toolkit.getDefaultToolkit().getScreenSize();
		this.setLocation(dim.width / 2 - this.getSize().width / 2, dim.height / 2 - this.getSize().height / 2);

		jp.setBounds(0, 0, 883, 460);
		jp.setBackground(new Color(18, 18, 18));
		jp.setBorder(new TitledBorder(new LineBorder(new Color(98, 0, 238), 2), // ((r: g: b:), thickness)
				"Atualizar jogadores", TitledBorder.LEADING, TitledBorder.TOP, null, new Color(55, 0, 179)));
		add(jp);
		
		l9 = new JLabel("Coloque o ID exato do jogo para autocompletar");
		l9.setBounds(60, 79, 520, 30);
		l9.setFont(new Font("futura", Font.BOLD, 20));
		l9.setForeground(Color.WHITE);
		jp.add(l9);
		
		tf = new RoundJTextField(15);
		tf.setBounds(530, 80, 200, 30);
		tf.setBackground(new Color(28, 28, 28));
		tf.setForeground(Color.WHITE);
		tf.setCaretColor(new Color(98, 0, 238));
		jp.add(tf);
		
		b1 = new JButton("Checar");
		b1.addActionListener(this);
		b1.setBounds(740, 80, 100, 30);
		b1.setBackground(new Color(28, 28, 28));
		b1.setForeground(Color.WHITE);
		b1.setBorder(new RoundedBorder(10));
		jp.add(b1);
		b1.addActionListener(new ActionListener(){
            public void actionPerformed(ActionEvent ae){
                try{
                    
                    Conn c = new Conn();
                    String query = "SELECT * FROM jogos WHERE id = '" + tf.getText() + "'";
                    ResultSet rs = c.st.executeQuery(query);
                    
                    if(rs.next()){
                        t2.setText(rs.getString(1));
                        t3.setText(rs.getString(2));
                        t4.setText(rs.getString(3));
                        c2.setSelectedItem(rs.getString(4));
                        c3.setSelectedItem(rs.getString(5));
                        c1.setSelectedItem(rs.getString(6));
                    }
                }catch(Exception e){
                	e.printStackTrace();
                }
            }
        });
		
		// ---------------------------------------------------------------------------------
		
		l1 = new JLabel("Time");
		l1.setForeground(Color.BLACK);
		l1.setFont(new Font("futura", Font.BOLD, 20));
		l1.setBounds(100, 200, 100, 30);
		l1.setForeground(Color.WHITE);
		jp.add(l1);
		
		c1 = new JComboBox<String>(new String[] { "América Mineiro", "Athletico Paranaense", "Atlético Mineiro", "Bahia", "Botafogo", "Corinthians", "Coritiba", "Cruzeiro", "Cuiabá", "Flamengo", "Fluminense", "Fortaleza", "Goiás", "Grêmio", "Internacional", "Palmeiras", "Red Bull Bragantino", "Santos", "São Paulo", "Vasco"});
		c1.setBounds(160, 200, 180, 30);
		c1.setSelectedIndex(-1);
		c1.setForeground(Color.WHITE);
		c1.setBackground(new Color(28, 28, 28));
		c1.setBorder(new LineBorder(new Color(97, 97, 97), 1));
		jp.add(c1);
		c1.setRenderer(new DefaultListCellRenderer() {
			private static final long serialVersionUID = 1L;

			@Override
			public void paint(Graphics g) {
				setBackground(new Color(28, 28, 28));
				setForeground(Color.WHITE);
				super.paint(g);
			}
		});

		// ---------------------------------------------------------------------------------

		l2 = new JLabel("Time da casa");
		l2.setForeground(Color.BLACK);
		l2.setFont(new Font("futura", Font.BOLD, 20));
		l2.setBounds(20, 280, 200, 30);
		l2.setForeground(Color.WHITE);
		jp.add(l2);


		t2 = new JTextField();
		t2.setForeground(Color.WHITE);
		t2.setBorder(new LineBorder(new Color(97, 97, 97), 1));
		t2.setCaretColor(new Color(98, 0, 238));
		t2.setBackground(new Color(28, 28, 28));
		t2.setBounds(160, 280, 180, 30);
		jp.add(t2);

		// ---------------------------------------------------------------------------------

		l3 = new JLabel("Placar");
		l3.setForeground(Color.BLACK);
		l3.setFont(new Font("futura", Font.BOLD, 20));
		l3.setBounds(410, 250, 100, 30);
		l3.setForeground(Color.WHITE);
		jp.add(l3);

		t3 = new JTextField();
		t3.setForeground(Color.WHITE);
		t3.setBorder(new LineBorder(new Color(97, 97, 97), 1));
		t3.setCaretColor(new Color(98, 0, 238));
		t3.setBackground(new Color(28, 28, 28));
		t3.setBounds(350, 280, 180, 30);
		jp.add(t3);

		// ---------------------------------------------------------------------------------

		l4 = new JLabel("Time de fora");
		l4.setForeground(Color.BLACK);
		l4.setFont(new Font("futura", Font.BOLD, 20));
		l4.setBounds(735, 280, 200, 30);
		l4.setForeground(Color.WHITE);
		jp.add(l4);

		t4 = new JTextField();
		t4.setForeground(Color.WHITE);
		t4.setBorder(new LineBorder(new Color(97, 97, 97), 1));
		t4.setCaretColor(new Color(98, 0, 238));
		t4.setBackground(new Color(28, 28, 28));
		t4.setBounds(540, 280, 180, 30);
		jp.add(t4);

		// ---------------------------------------------------------------------------------

		l5 = new JLabel("Campeonato");
		l5.setForeground(Color.BLACK);
		l5.setFont(new Font("futura", Font.BOLD, 20));
		l5.setBounds(735, 200, 200, 30);
		l5.setForeground(Color.WHITE);
		jp.add(l5);


		c2 = new JComboBox<String>(new String[] { "Baiano", "Carioca(Taça Guanabara)", "Carioca(Taça Rio)", "Carioca(Fase Final)", "Cearense", "Copa do Nordeste", "Flórida Tour", "Goiano", "Mato-Grossense", "Mineiro", "Paranaense", "Paulista", "Recopa Gaúcha", "Gaúcho", "Recopa Sul-Americana", "Supercopa do Brasil", "Sul-Americana", "Brasileirão", "Copa do Brasil", "Libertadores", "Mundial de clubes"});
		c2.setBounds(540, 200, 180, 30);
		c2.setSelectedIndex(-1);
		c2.setForeground(Color.WHITE);
		c2.setBackground(new Color(28, 28, 28));
		c2.setBorder(new LineBorder(new Color(97, 97, 97), 1));
		jp.add(c2);
		c2.setRenderer(new DefaultListCellRenderer() {
			private static final long serialVersionUID = 1L;

			@Override
			public void paint(Graphics g) {
				setBackground(new Color(28, 28, 28));
				setForeground(Color.WHITE);
				super.paint(g);
			}
		});

		// ---------------------------------------------------------------------------------

		l6 = new JLabel("Resultado");
		l6.setForeground(Color.BLACK);
		l6.setFont(new Font("futura", Font.BOLD, 20));
		l6.setBounds(390, 170, 200, 30);
		l6.setForeground(Color.WHITE);
		jp.add(l6);

		c3 = new JComboBox<String>(new String[] { "Vitória", "Derrota", "Empate", "Vitória(Campeão)", "Derrota(Campeão)", "Empate(Campeão)", "Vitória(Classificado)", "Derrota(Classificado)", "Empate(Classificado)", "Vitória(Eliminado)", "Derrota(Eliminado)", "Empate(Eliminado)", "Vitória na prorrogação(Classificado)", "Vitória na prorrogação(Campeão)", "Derrota na prorrogação", "Vitória nos pênaltis(Classificado)", "Vitória nos pênaltis(Campeão)", "Derrota nos pênaltis"});
		c3.setBounds(350, 200, 180, 30);
		c3.setSelectedIndex(-1);
		c3.setForeground(Color.WHITE);
		c3.setBackground(new Color(28, 28, 28));
		c3.setBorder(new LineBorder(new Color(97, 97, 97), 1));
		jp.add(c3);
		c3.setRenderer(new DefaultListCellRenderer() {
			private static final long serialVersionUID = 1L;

			@Override
			public void paint(Graphics g) {
				setBackground(new Color(28, 28, 28));
				setForeground(Color.WHITE);
				super.paint(g);
			}
		});
		
		// ---------------------------------------------------------------------------------
		
		b3 = new JButton("Atualizar");
		b3.addActionListener(this);
		b3.setBounds(460, 380, 150, 40);
		b3.setBackground(new Color(28, 28, 28));
		b3.setForeground(Color.WHITE);
		b3.setBorder(new RoundedBorder(10));
		jp.add(b3);

		b2 = new JButton("Voltar");
		b2.addActionListener(this);
		b2.setBounds(260, 380, 150, 40);
		b2.setBackground(new Color(28, 28, 28));
		b2.setForeground(Color.WHITE);
		b2.setBorder(new RoundedBorder(10));
		jp.add(b2);
	}
	
	public class RoundJTextField extends JTextField {

		private static final long serialVersionUID = 1L;

		private Shape shape;

		public RoundJTextField(int size) {
			super(size);
			setOpaque(false);
		}

		protected void paintComponent(Graphics g) {
			g.setColor(getBackground());
			g.fillRoundRect(0, 0, getWidth() - 1, getHeight() - 1, 15, 15);
			super.paintComponent(g);
		}

		protected void paintBorder(Graphics g) {
			g.setColor(new Color(97, 97, 97));
			g.drawRoundRect(0, 0, getWidth() - 1, getHeight() - 1, 15, 15);
		}

		public boolean contains(int x, int y) {
			if (shape == null || !shape.getBounds().equals(getBounds())) {
				shape = new RoundRectangle2D.Float(0, 0, getWidth() - 1, getHeight() - 1, 15, 15);
			}
			return shape.contains(x, y);
		}
	}

	// ---------------------------------------------------------------------------------

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
		try {
			if (actionEvent.getSource() == b3) {
				try {
					Conn c = new Conn();
					String query = "UPDATE jogos SET casa='" + t2.getText() 
						+ "',  placar='" + t3.getText() + "', fora='" 
						+ t4.getText() + "', campeonato='" + (String) c2.getSelectedItem() 
						+ "', resultado='" + (String) c3.getSelectedItem()  + "', time='" 
						+ (String) c1.getSelectedItem() + "' WHERE id='" + tf.getText() + "'";
					
					c.st.executeUpdate(query);
					JOptionPane.showMessageDialog(null, "Informações do jogo atualizado com sucesso!");
					setVisible(false);
					new GameUpdate().setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			} else if (actionEvent.getSource() == b2) {
				setVisible(false);
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					GameUpdate frame = new GameUpdate();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}
}

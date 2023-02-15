package campbrasileiro;

import java.awt.Color;
import java.awt.Component;
import java.awt.Dimension;
import java.awt.EventQueue;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Insets;
import java.awt.Toolkit;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.FocusEvent;
import java.awt.event.FocusListener;
import java.util.Random;

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
import javax.swing.plaf.metal.MetalLookAndFeel;

public class AddGames extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;

	JPanel jp;
	JLabel l1, l2, l3, l4, l5, l6, l7, l8, l13;
	JTextField t1, t2, t3, t4, t9;
	JButton b1, b2;
	JComboBox<String> c1, c2, c3;

	Random ran = new Random();
	long rn = (ran.nextLong() % 9000L) + 100000L;
	long random = Math.abs(rn);

	AddGames() {
		super("Adicionar jogo");
		jp = new JPanel();
		setSize(900, 500);
		jp.setLayout(null);
		this.setResizable(false);

		Dimension dim = Toolkit.getDefaultToolkit().getScreenSize();
		this.setLocation(dim.width / 2 - this.getSize().width / 2, dim.height / 2 - this.getSize().height / 2);

		jp.setBounds(0, 0, 883, 460);
		jp.setBackground(new Color(18, 18, 18));
		jp.setBorder(new TitledBorder(new LineBorder(new Color(98, 0, 238), 2), // ((r: g: b:), thickness)
				"Adicionar jogo", TitledBorder.LEADING, TitledBorder.TOP, null, new Color(55, 0, 179)));
		add(jp);
		
		MetalLookAndFeel.setCurrentTheme(new javax.swing.plaf.metal.OceanTheme() {
			@Override
			protected javax.swing.plaf.ColorUIResource getSecondary2() {
				return new javax.swing.plaf.ColorUIResource(new Color(28, 28, 28));
			}
		});

		// ---------------------------------------------------------------------------------

		l13 = new JLabel("Adicionar jogos");
		l13.setForeground(Color.BLACK);
		l13.setFont(new Font("futura", Font.BOLD, 20));
		l13.setBounds(365, 54, 240, 30);
		l13.setForeground(Color.WHITE);
		jp.add(l13);
		
		l1 = new JLabel("Time");
		l1.setForeground(Color.BLACK);
		l1.setFont(new Font("futura", Font.BOLD, 20));
		l1.setBounds(100, 150, 100, 30);
		l1.setForeground(Color.WHITE);
		jp.add(l1);
		
		c1 = new JComboBox<String>(new String[] { "América Mineiro", "Athletico Paranaense", "Atlético Mineiro", "Bahia", "Botafogo", "Corinthians", "Coritiba", "Cruzeiro", "Cuiabá", "Flamengo", "Fluminense", "Fortaleza", "Goiás", "Grêmio", "Internacional", "Palmeiras", "Red Bull Bragantino", "Santos", "São Paulo", "Vasco"});
		c1.setBounds(160, 150, 180, 30);
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
		l2.setBounds(20, 230, 200, 30);
		l2.setForeground(Color.WHITE);
		jp.add(l2);


		t2 = new JTextField();
		t2.setForeground(Color.WHITE);
		t2.setBorder(new LineBorder(new Color(97, 97, 97), 1));
		t2.setCaretColor(new Color(98, 0, 238));
		t2.setBackground(new Color(28, 28, 28));
		t2.setBounds(160, 230, 180, 30);
		jp.add(t2);

		// ---------------------------------------------------------------------------------

		l3 = new JLabel("Placar");
		l3.setForeground(Color.BLACK);
		l3.setFont(new Font("futura", Font.BOLD, 20));
		l3.setBounds(410, 200, 100, 30);
		l3.setForeground(Color.WHITE);
		jp.add(l3);

		t3 = new JTextField("Ex: 2x1 ou 1x2");
		t3.setForeground(Color.GRAY);
		t3.setBorder(new LineBorder(new Color(97, 97, 97), 1));
		t3.setCaretColor(new Color(98, 0, 238));
		t3.setBackground(new Color(28, 28, 28));
		t3.setBounds(350, 230, 180, 30);
		jp.add(t3);
		t3.addFocusListener(new FocusListener() {
			@Override
			public void focusGained(FocusEvent e) {
				if (t3.getText().equals("Ex: 2x1 ou 1x2")) {
					t3.setText("");
					t3.setForeground(Color.WHITE);
				}
			}

			@Override
			public void focusLost(FocusEvent e) {
				if (t3.getText().isEmpty()) {
					t3.setForeground(Color.GRAY);
					t3.setText("Ex: 2x1 ou 1x2");
				}
			}
		});

		// ---------------------------------------------------------------------------------

		l4 = new JLabel("Time de fora");
		l4.setForeground(Color.BLACK);
		l4.setFont(new Font("futura", Font.BOLD, 20));
		l4.setBounds(735, 230, 200, 30);
		l4.setForeground(Color.WHITE);
		jp.add(l4);

		t4 = new JTextField();
		t4.setForeground(Color.WHITE);
		t4.setBorder(new LineBorder(new Color(97, 97, 97), 1));
		t4.setCaretColor(new Color(98, 0, 238));
		t4.setBackground(new Color(28, 28, 28));
		t4.setBounds(540, 230, 180, 30);
		jp.add(t4);

		// ---------------------------------------------------------------------------------

		l5 = new JLabel("Campeonato");
		l5.setForeground(Color.BLACK);
		l5.setFont(new Font("futura", Font.BOLD, 20));
		l5.setBounds(735, 150, 200, 30);
		l5.setForeground(Color.WHITE);
		jp.add(l5);


		c2 = new JComboBox<String>(new String[] { "Baiano", "Carioca(Taça Guanabara)", "Carioca(Taça Rio)", "Carioca(Fase Final)", "Cearense", "Copa do Nordeste", "Flórida Tour", "Goiano", "Mato-Grossense", "Mineiro", "Paranaense", "Paulista", "Recopa Gaúcha", "Gaúcho", "Recopa Sul-Americana", "Supercopa do Brasil", "Sul-Americana", "Brasileirão", "Copa do Brasil", "Libertadores", "Mundial de clubes"});
		c2.setBounds(540, 150, 180, 30);
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
		l6.setBounds(390, 120, 200, 30);
		l6.setForeground(Color.WHITE);
		jp.add(l6);

		c3 = new JComboBox<String>(new String[] { "Vitória", "Derrota", "Empate", "Vitória(Campeão)", "Derrota(Campeão)", "Empate(Campeão)", "Vitória(Classificado)", "Derrota(Classificado)", "Empate(Classificado)", "Vitória(Eliminado)", "Derrota(Eliminado)", "Empate(Eliminado)", "Vitória na prorrogação(Classificado)", "Vitória na prorrogação(Campeão)", "Derrota na prorrogação", "Vitória nos pênaltis(Classificado)", "Vitória nos pênaltis(Campeão)", "Derrota nos pênaltis", "Vitória(3° Lugar)"});
		c3.setBounds(350, 150, 180, 30);
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
		
		l8 = new JLabel("ID");
		l8.setForeground(Color.BLACK);
		l8.setFont(new Font("futura", Font.BOLD, 20));
		l8.setBounds(425, 280, 200, 30);
		l8.setForeground(Color.WHITE);
		jp.add(l8);

		t9 = new JTextField();
		t9.setForeground(Color.WHITE);
		t9.setText("" + random);
		t9.setBorder(new LineBorder(new Color(97, 97, 97), 1));
		t9.setCaretColor(new Color(98, 0, 238));
		t9.setBackground(new Color(28, 28, 28));
		t9.setBounds(350, 310, 180, 30);
		jp.add(t9);
		
		// ---------------------------------------------------------------------------------

		b1 = new JButton("Adicionar");
		b1.addActionListener(this);
		b1.setBounds(460, 380, 150, 40);
		b1.setBackground(new Color(28, 28, 28));
		b1.setForeground(Color.WHITE);
		b1.setBorder(new RoundedBorder(10));
		jp.add(b1);

		b2 = new JButton("Voltar");
		b2.addActionListener(this);
		b2.setBounds(260, 380, 150, 40);
		b2.setBackground(new Color(28, 28, 28));
		b2.setForeground(Color.WHITE);
		b2.setBorder(new RoundedBorder(10));
		jp.add(b2);

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

	// ---------------------------------------------------------------------------------

	@Override
	public void actionPerformed(ActionEvent actionEvent) {
		try {
			if (actionEvent.getSource() == b1) {
				try {
					String casa = t2.getText();
					String placar = t3.getText();
					String fora = t4.getText();
					String campeonato = (String) c2.getSelectedItem();
					String resultado = (String) c3.getSelectedItem();
					String time = (String) c1.getSelectedItem();
					String id = t9.getText();
					
					Conn c = new Conn();
					String query = "INSERT INTO jogos VALUES('" + casa + "', '" + placar + "', '" 
							+ fora + "','" + campeonato + "', '" + resultado + "', '" + time + "', '" 
							+ id + "')";
					
					c.st.executeUpdate(query);
					JOptionPane.showMessageDialog(null, "Jogo adicionado com sucesso!");
					setVisible(false);
					new AddGames().setVisible(true);
					
				}
				catch (Exception e) {
					e.printStackTrace();
				}
			} else if (actionEvent.getSource() == b2) {
				setVisible(false);
			}
			
		}
		catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					AddGames frame = new AddGames();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}
}

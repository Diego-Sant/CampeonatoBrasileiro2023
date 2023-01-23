package campbrasileiro;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.EventQueue;
import java.awt.Font;
import java.awt.Image;
import java.awt.Toolkit;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JPanel;
import javax.swing.KeyStroke;
import javax.swing.border.LineBorder;
import javax.swing.border.TitledBorder;

public class Menu extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;

	JPanel jp;

	Menu() {
		super("Menu principal");
		jp = new JPanel();
		setSize(300, 300);
		jp.setLayout(null);
		this.setResizable(false);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		Dimension dim = Toolkit.getDefaultToolkit().getScreenSize();
		this.setLocation(dim.width / 2 - this.getSize().width / 2, dim.height / 2 - this.getSize().height / 2);

		jp.setBounds(0, 0, 283, 260);
		jp.setBackground(new Color(18, 18, 18));
		jp.setBorder(new TitledBorder(new LineBorder(new Color(98, 0, 238), 2), // ((r: g: b:), thickness)
		"Menu principal", TitledBorder.LEADING, TitledBorder.TOP, null, new Color(55, 0, 179)));
		add(jp);

		JMenuBar mb = new JMenuBar();
		mb.setBackground(new Color(18, 18, 18));
		
// ---------------------------------------------------------------------------------

		JMenu menu = new JMenu("Jogador");
		menu.setFont(new Font("futura", Font.PLAIN, 16));
		JMenuItem mi1 = new JMenuItem("Novo jogador");
		JMenuItem mi2 = new JMenuItem("Atualizar informações");
		JMenuItem mi3 = new JMenuItem("Informações dos jogadores");
		menu.setForeground(Color.WHITE);

		mi1.setFont(new Font("futura", Font.PLAIN, 16));
		mi1.setMnemonic('A');
		mi1.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_A, ActionEvent.CTRL_MASK));
		mi1.setBackground(new Color(18, 18, 18));
		mi1.setForeground(Color.WHITE);
		menu.add(mi1);

		mi2.setFont(new Font("futura", Font.PLAIN, 16));
		mi2.setMnemonic('B');
		mi2.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_B, ActionEvent.CTRL_MASK));
		mi2.setBackground(new Color(18, 18, 18));
		mi2.setForeground(Color.WHITE);
		menu.add(mi2);
		
		mi3.setFont(new Font("futura", Font.PLAIN, 16));
		mi3.setMnemonic('C');
		mi3.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_C, ActionEvent.CTRL_MASK));
		mi3.setBackground(new Color(18, 18, 18));
		mi3.setForeground(Color.WHITE);
		menu.add(mi3);
		
		JMenu menu3 = new JMenu("Jogos");
		menu3.setFont(new Font("futura", Font.PLAIN, 16));
		JMenuItem mi25 = new JMenuItem("Adicionar jogo");
		JMenuItem mi26 = new JMenuItem("Atualizar informações do jogo");
		menu3.setForeground(Color.WHITE);
		
		mi25.setFont(new Font("futura", Font.PLAIN, 16));
		mi25.setMnemonic('D');
		mi25.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_D, ActionEvent.CTRL_MASK));
		mi25.setBackground(new Color(18, 18, 18));
		mi25.setForeground(Color.WHITE);
		menu.add(mi25);

		mi26.setFont(new Font("futura", Font.PLAIN, 16));
		mi26.setMnemonic('E');
		mi26.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_E, ActionEvent.CTRL_MASK));
		mi26.setBackground(new Color(18, 18, 18));
		mi26.setForeground(Color.WHITE);
		menu.add(mi26);
		
		JMenu menu2 = new JMenu("Times");
		menu2.setFont(new Font("futura", Font.PLAIN, 16));
		JMenuItem mi4 = new JMenuItem("América MG");
		JMenuItem mi5 = new JMenuItem("Athletico PR");
		JMenuItem mi6 = new JMenuItem("Atlético MG");
		JMenuItem mi7 = new JMenuItem("Bahia");
		JMenuItem mi8 = new JMenuItem("Botafogo");
		JMenuItem mi9 = new JMenuItem("Corinthians");
		JMenuItem mi10 = new JMenuItem("Coritiba");
		JMenuItem mi11 = new JMenuItem("Cruzeiro");
		JMenuItem mi12 = new JMenuItem("Cuiabá");
		JMenuItem mi13 = new JMenuItem("Flamengo");
		JMenuItem mi14 = new JMenuItem("Fluminense");
		JMenuItem mi15 = new JMenuItem("Fortaleza");
		JMenuItem mi16 = new JMenuItem("Goiás");
		JMenuItem mi17 = new JMenuItem("Grêmio");
		JMenuItem mi18 = new JMenuItem("Internacional");
		JMenuItem mi19 = new JMenuItem("Palmeiras");
		JMenuItem mi20 = new JMenuItem("RB Bragantino");
		JMenuItem mi21 = new JMenuItem("Santos");
		JMenuItem mi22 = new JMenuItem("São Paulo");
		JMenuItem mi23 = new JMenuItem("Vasco");
		menu2.setForeground(Color.WHITE);
		
		mi4.setFont(new Font("futura", Font.PLAIN, 16));
		ImageIcon icon1 = new ImageIcon(ClassLoader.getSystemResource("icons/americamg.png"));
		Image img1 = icon1.getImage().getScaledInstance(20, 25, Image.SCALE_DEFAULT);
		mi4.setIcon(new ImageIcon(img1));
		mi4.setMnemonic('F');
		mi4.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_F, ActionEvent.CTRL_MASK));
		mi4.setBackground(new Color(18, 18, 18));
		mi4.setForeground(Color.WHITE);
		menu.add(mi4);
		
		mi5.setFont(new Font("futura", Font.PLAIN, 16));
		ImageIcon icon2 = new ImageIcon(ClassLoader.getSystemResource("icons/athleticopr.png"));
		Image img2 = icon2.getImage().getScaledInstance(20, 25, Image.SCALE_DEFAULT);
		mi5.setIcon(new ImageIcon(img2));
		mi5.setMnemonic('G');
		mi5.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_G, ActionEvent.CTRL_MASK));
		mi5.setBackground(new Color(18, 18, 18));
		mi5.setForeground(Color.WHITE);
		menu.add(mi5);
		
		mi6.setFont(new Font("futura", Font.PLAIN, 16));
		ImageIcon icon3 = new ImageIcon(ClassLoader.getSystemResource("icons/atleticomg.png"));
		Image img3 = icon3.getImage().getScaledInstance(20, 25, Image.SCALE_DEFAULT);
		mi6.setIcon(new ImageIcon(img3));
		mi6.setMnemonic('H');
		mi6.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_H, ActionEvent.CTRL_MASK));
		mi6.setBackground(new Color(18, 18, 18));
		mi6.setForeground(Color.WHITE);
		menu.add(mi6);
		
		mi7.setFont(new Font("futura", Font.PLAIN, 16));
		ImageIcon icon4 = new ImageIcon(ClassLoader.getSystemResource("icons/bahia.png"));
		Image img4 = icon4.getImage().getScaledInstance(20, 20, Image.SCALE_DEFAULT);
		mi7.setIcon(new ImageIcon(img4));
		mi7.setMnemonic('I');
		mi7.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_I, ActionEvent.CTRL_MASK));
		mi7.setBackground(new Color(18, 18, 18));
		mi7.setForeground(Color.WHITE);
		menu.add(mi7);
		
		mi8.setFont(new Font("futura", Font.PLAIN, 16));
		ImageIcon icon5 = new ImageIcon(ClassLoader.getSystemResource("icons/botafogo.png"));
		Image img5 = icon5.getImage().getScaledInstance(20, 23, Image.SCALE_DEFAULT);
		mi8.setIcon(new ImageIcon(img5));
		mi8.setMnemonic('J');
		mi8.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_J, ActionEvent.CTRL_MASK));
		mi8.setBackground(new Color(18, 18, 18));
		mi8.setForeground(Color.WHITE);
		menu.add(mi8);
		
		mi9.setFont(new Font("futura", Font.PLAIN, 16));
		ImageIcon icon6 = new ImageIcon(ClassLoader.getSystemResource("icons/corinthians.png"));
		Image img6 = icon6.getImage().getScaledInstance(20, 24, Image.SCALE_DEFAULT);
		mi9.setIcon(new ImageIcon(img6));
		mi9.setMnemonic('K');
		mi9.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_K, ActionEvent.CTRL_MASK));
		mi9.setBackground(new Color(18, 18, 18));
		mi9.setForeground(Color.WHITE);
		menu.add(mi9);
		
		mi10.setFont(new Font("futura", Font.PLAIN, 16));
		ImageIcon icon7 = new ImageIcon(ClassLoader.getSystemResource("icons/coritiba.png"));
		Image img7 = icon7.getImage().getScaledInstance(20, 20, Image.SCALE_DEFAULT);
		mi10.setIcon(new ImageIcon(img7));
		mi10.setMnemonic('L');
		mi10.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_L, ActionEvent.CTRL_MASK));
		mi10.setBackground(new Color(18, 18, 18));
		mi10.setForeground(Color.WHITE);
		menu.add(mi10);
		
		mi11.setFont(new Font("futura", Font.PLAIN, 16));
		ImageIcon icon8 = new ImageIcon(ClassLoader.getSystemResource("icons/cruzeiro.png"));
		Image img8 = icon8.getImage().getScaledInstance(20, 20, Image.SCALE_DEFAULT);
		mi11.setIcon(new ImageIcon(img8));
		mi11.setMnemonic('M');
		mi11.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_M, ActionEvent.CTRL_MASK));
		mi11.setBackground(new Color(18, 18, 18));
		mi11.setForeground(Color.WHITE);
		menu.add(mi11);
		
		mi12.setFont(new Font("futura", Font.PLAIN, 16));
		ImageIcon icon9 = new ImageIcon(ClassLoader.getSystemResource("icons/cuiaba.png"));
		Image img9 = icon9.getImage().getScaledInstance(20, 23, Image.SCALE_DEFAULT);
		mi12.setIcon(new ImageIcon(img9));
		mi12.setMnemonic('N');
		mi12.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_N, ActionEvent.CTRL_MASK));
		mi12.setBackground(new Color(18, 18, 18));
		mi12.setForeground(Color.WHITE);
		menu.add(mi12);
		
		mi13.setFont(new Font("futura", Font.PLAIN, 16));
		ImageIcon icon10 = new ImageIcon(ClassLoader.getSystemResource("icons/flamengo.png"));
		Image img10 = icon10.getImage().getScaledInstance(20, 25, Image.SCALE_DEFAULT);
		mi13.setIcon(new ImageIcon(img10));
		mi13.setMnemonic('O');
		mi13.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_O, ActionEvent.CTRL_MASK));
		mi13.setBackground(new Color(18, 18, 18));
		mi13.setForeground(Color.WHITE);
		menu.add(mi13);
		
		mi14.setFont(new Font("futura", Font.PLAIN, 16));
		ImageIcon icon11 = new ImageIcon(ClassLoader.getSystemResource("icons/fluminense.png"));
		Image img11 = icon11.getImage().getScaledInstance(20, 25, Image.SCALE_DEFAULT);
		mi14.setIcon(new ImageIcon(img11));
		mi14.setMnemonic('P');
		mi14.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_P, ActionEvent.CTRL_MASK));
		mi14.setBackground(new Color(18, 18, 18));
		mi14.setForeground(Color.WHITE);
		menu.add(mi14);
		
		mi15.setFont(new Font("futura", Font.PLAIN, 16));
		ImageIcon icon12 = new ImageIcon(ClassLoader.getSystemResource("icons/fortaleza.png"));
		Image img12 = icon12.getImage().getScaledInstance(20, 23, Image.SCALE_DEFAULT);
		mi15.setIcon(new ImageIcon(img12));
		mi15.setMnemonic('Q');
		mi15.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_Q, ActionEvent.CTRL_MASK));
		mi15.setBackground(new Color(18, 18, 18));
		mi15.setForeground(Color.WHITE);
		menu.add(mi15);
		
		mi16.setFont(new Font("futura", Font.PLAIN, 16));
		ImageIcon icon13 = new ImageIcon(ClassLoader.getSystemResource("icons/goias.png"));
		Image img13 = icon13.getImage().getScaledInstance(20, 20, Image.SCALE_DEFAULT);
		mi16.setIcon(new ImageIcon(img13));
		mi16.setMnemonic('R');
		mi16.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_R, ActionEvent.CTRL_MASK));
		mi16.setBackground(new Color(18, 18, 18));
		mi16.setForeground(Color.WHITE);
		menu.add(mi16);
		
		mi17.setFont(new Font("futura", Font.PLAIN, 16));
		ImageIcon icon14 = new ImageIcon(ClassLoader.getSystemResource("icons/gremio.png"));
		Image img14 = icon14.getImage().getScaledInstance(20, 20, Image.SCALE_DEFAULT);
		mi17.setIcon(new ImageIcon(img14));
		mi17.setMnemonic('S');
		mi17.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_S, ActionEvent.CTRL_MASK));
		mi17.setBackground(new Color(18, 18, 18));
		mi17.setForeground(Color.WHITE);
		menu.add(mi17);
		
		mi18.setFont(new Font("futura", Font.PLAIN, 16));
		ImageIcon icon15 = new ImageIcon(ClassLoader.getSystemResource("icons/internacional.png"));
		Image img15 = icon15.getImage().getScaledInstance(20, 20, Image.SCALE_DEFAULT);
		mi18.setIcon(new ImageIcon(img15));
		mi18.setMnemonic('T');
		mi18.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_T, ActionEvent.CTRL_MASK));
		mi18.setBackground(new Color(18, 18, 18));
		mi18.setForeground(Color.WHITE);
		menu.add(mi18);
		
		mi19.setFont(new Font("futura", Font.PLAIN, 16));
		ImageIcon icon16 = new ImageIcon(ClassLoader.getSystemResource("icons/palmeiras.png"));
		Image img16 = icon16.getImage().getScaledInstance(20, 20, Image.SCALE_DEFAULT);
		mi19.setIcon(new ImageIcon(img16));
		mi19.setMnemonic('U');
		mi19.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_U, ActionEvent.CTRL_MASK));
		mi19.setBackground(new Color(18, 18, 18));
		mi19.setForeground(Color.WHITE);
		menu.add(mi19);
		
		mi20.setFont(new Font("futura", Font.PLAIN, 16));
		ImageIcon icon17 = new ImageIcon(ClassLoader.getSystemResource("icons/bragantino.png"));
		Image img17 = icon17.getImage().getScaledInstance(23, 18, Image.SCALE_DEFAULT);
		mi20.setIcon(new ImageIcon(img17));
		mi20.setMnemonic('V');
		mi20.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_V, ActionEvent.CTRL_MASK));
		mi20.setBackground(new Color(18, 18, 18));
		mi20.setForeground(Color.WHITE);
		menu.add(mi20);
		
		mi21.setFont(new Font("futura", Font.PLAIN, 16));
		ImageIcon icon18 = new ImageIcon(ClassLoader.getSystemResource("icons/santos.png"));
		Image img18 = icon18.getImage().getScaledInstance(20, 22, Image.SCALE_DEFAULT);
		mi21.setIcon(new ImageIcon(img18));
		mi21.setMnemonic('W');
		mi21.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_W, ActionEvent.CTRL_MASK));
		mi21.setBackground(new Color(18, 18, 18));
		mi21.setForeground(Color.WHITE);
		menu.add(mi21);
		
		mi22.setFont(new Font("futura", Font.PLAIN, 16));
		ImageIcon icon19 = new ImageIcon(ClassLoader.getSystemResource("icons/saopaulo.png"));
		Image img19 = icon19.getImage().getScaledInstance(20, 22, Image.SCALE_DEFAULT);
		mi22.setIcon(new ImageIcon(img19));
		mi22.setMnemonic('X');
		mi22.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_X, ActionEvent.CTRL_MASK));
		mi22.setBackground(new Color(18, 18, 18));
		mi22.setForeground(Color.WHITE);
		menu.add(mi22);
		
		mi23.setFont(new Font("futura", Font.PLAIN, 16));
		ImageIcon icon20 = new ImageIcon(ClassLoader.getSystemResource("icons/vasco.png"));
		Image img20 = icon20.getImage().getScaledInstance(20, 24, Image.SCALE_DEFAULT);
		mi23.setIcon(new ImageIcon(img20));
		mi23.setMnemonic('Y');
		mi23.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_Y, ActionEvent.CTRL_MASK));
		mi23.setBackground(new Color(18, 18, 18));
		mi23.setForeground(Color.WHITE);
		menu.add(mi23);

		mi1.addActionListener(this);
		mi2.addActionListener(this);
		mi3.addActionListener(this);
		mi25.addActionListener(this);
		mi26.addActionListener(this);
		mi4.addActionListener(this);
		mi5.addActionListener(this);
		mi6.addActionListener(this);
		mi7.addActionListener(this);
		mi8.addActionListener(this);
		mi9.addActionListener(this);
		mi10.addActionListener(this);
		mi11.addActionListener(this);
		mi12.addActionListener(this);
		mi13.addActionListener(this);
		mi14.addActionListener(this);
		mi15.addActionListener(this);
		mi16.addActionListener(this);
		mi17.addActionListener(this);
		mi18.addActionListener(this);
		mi19.addActionListener(this);
		mi20.addActionListener(this);
		mi21.addActionListener(this);
		mi22.addActionListener(this);
		mi23.addActionListener(this);
		
// ---------------------------------------------------------------------------------

		JMenu menu8 = new JMenu("Sair");
		menu8.setFont(new Font("futura", Font.PLAIN, 16));
		JMenuItem mi24 = new JMenuItem("Deslogar");
		menu8.setForeground(Color.WHITE);

		mi24.setFont(new Font("futura", Font.PLAIN, 16));
		mi24.setMnemonic('R');
		mi24.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_R, ActionEvent.CTRL_MASK));
		mi24.setBackground(new Color(18, 18, 18));
		mi24.setForeground(Color.WHITE);
		menu8.add(mi24);

		mi24.addActionListener(this);

		menu.add(mi1);
		menu.add(mi2);
		menu.add(mi3);
		menu3.add(mi25);
		menu3.add(mi26);
		menu2.add(mi4);
		menu2.add(mi5);
		menu2.add(mi6);
		menu2.add(mi7);
		menu2.add(mi8);
		menu2.add(mi9);
		menu2.add(mi10);
		menu2.add(mi11);
		menu2.add(mi12);
		menu2.add(mi13);
		menu2.add(mi14);
		menu2.add(mi15);
		menu2.add(mi16);
		menu2.add(mi17);
		menu2.add(mi18);
		menu2.add(mi19);
		menu2.add(mi20);
		menu2.add(mi21);
		menu2.add(mi22);
		menu2.add(mi23);
		menu8.add(mi24);

		mb.add(menu);
		mb.add(menu3);
		mb.add(menu2);
		mb.add(menu8);

		setJMenuBar(mb);
	}

	@Override
	public void actionPerformed(ActionEvent actionEvent) {
		String msg = actionEvent.getActionCommand();

		if (msg.equals("Novo jogador")) {
			new AddPlayer().setVisible(true);
			
		} else if (msg.equals("Atualizar informações")) {
			new PlayerUpdate().setVisible(true);
			
		} else if (msg.equals("Informações dos jogadores")) {
			new PlayerDetails().setVisible(true);
			
		} else if (msg.equals("América MG")) {
			new AmericaMineiro().setVisible(true);
			
		} else if (msg.equals("Athletico PR")) {
			new AthleticoParanaense().setVisible(true);
			
		} else if (msg.equals("Atlético MG")) {
			new AtleticoMineiro().setVisible(true);
			
		} else if (msg.equals("Bahia")) {
			new Bahia().setVisible(true);
			
		} else if (msg.equals("Botafogo")) {
			new Botafogo().setVisible(true);
			
		} else if (msg.equals("Corinthians")) {
			new Corinthians().setVisible(true);
			
		} else if (msg.equals("Coritiba")) {
			new Coritiba().setVisible(true);
			
		} else if (msg.equals("Cruzeiro")) {
			new Cruzeiro().setVisible(true);
			
		} else if (msg.equals("Cuiabá")) {
			new Cuiaba().setVisible(true);
			
		} else if (msg.equals("Flamengo")) {
			new Flamengo().setVisible(true);
			
		} else if (msg.equals("Fluminense")) {
			new Fluminense().setVisible(true);
			
		} else if (msg.equals("Fortaleza")) {
			new Fortaleza().setVisible(true);
			
		} else if (msg.equals("Goiás")) {
			new Goias().setVisible(true);
			
		} else if (msg.equals("Grêmio")) {
			new Gremio().setVisible(true);
			
		} else if (msg.equals("Internacional")) {
			new Internacional().setVisible(true);
			
		} else if (msg.equals("Palmeiras")) {
			new Palmeiras().setVisible(true);
			
		} else if (msg.equals("RB Bragantino")) {
			new RBBragantino().setVisible(true);
			
		} else if (msg.equals("Santos")) {
			new Santos().setVisible(true);
			
		} else if (msg.equals("São Paulo")) {
			new SaoPaulo().setVisible(true);
			
		} else if (msg.equals("Vasco")) {
			new Vasco().setVisible(true);
			
		} else if (msg.equals("Deslogar")) {
			System.exit(0);
			
		} else if (msg.equals("Adicionar jogo")) {
			new AddGames().setVisible(true);
			
		} else if (msg.equals("Atualizar informações do jogo")) {
			new GameUpdate().setVisible(true);
			
		}
	}

	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Menu frame = new Menu();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

}
